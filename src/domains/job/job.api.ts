import { type } from "arktype";
import type { AxiosInstance } from "axios";
import { JobDto } from "./job.dto";
import { toJob } from "./job.transform";
import { Job, JobApplicationForm } from "./job.type";

export class JobApi {
	private endpoint: string;
	private client: AxiosInstance;
	private storageKey: string;
	private applicationFormStorageKey: string;

	constructor(
		endpoint: string,
		client: AxiosInstance,
		storageKey: string = "jobs",
		applicationFormStorageKey: string = "jobApplicationForms",
	) {
		this.endpoint = endpoint;
		this.client = client;
		this.storageKey = storageKey;
		this.applicationFormStorageKey = applicationFormStorageKey;
	}

	private loadJobsFromStorage = (): Job[] | null => {
		try {
			const storedJson = localStorage.getItem(this.storageKey);

			if (!storedJson) {
				return null;
			}
			const parsed = JSON.parse(storedJson) as Record<string, string>[];
			const storedData = Job.array()(
				parsed.map((job) => ({ ...job, startDate: new Date(job.startDate) })),
			);

			if (storedData instanceof type.errors) {
				console.log(storedData.summary);
				throw new Error(storedData.summary);
			}

			return storedData;
		} catch {
			return null;
		}
	};

	private saveJobsToStorage = (jobs: Job[]): void => {
		const jobsJson = JSON.stringify(jobs);
		localStorage.setItem(this.storageKey, jobsJson);
	};

	private loadJobFromStorage = (
		identifier: JobDto["id"] | JobDto["slug"],
	): Job | null => {
		const allJobs = this.loadJobsFromStorage();

		if (!allJobs) {
			return null;
		}

		return (
			allJobs.find((job) => job.id === identifier || job.slug === identifier) ||
			null
		);
	};

	private saveJobToStorage = (job: Job): void => {
		const allJobs = this.loadJobsFromStorage() || [];
		const jobIndex = allJobs.findIndex((j) => j.id === job.id);

		if (jobIndex > -1) {
			allJobs[jobIndex] = job;
		} else {
			allJobs.push(job);
		}
		this.saveJobsToStorage(allJobs);
	};

	private loadApplicationFormsFromStorage = (): JobApplicationForm[] | null => {
		try {
			const storedJson = localStorage.getItem(this.applicationFormStorageKey);
			if (!storedJson) {
				return null;
			}
			const storedData = JobApplicationForm.array()(JSON.parse(storedJson));

			if (storedData instanceof type.errors) {
				throw new Error(storedData.summary);
			}

			return storedData;
		} catch {
			return null;
		}
	};

	private saveApplicationFormsToStorage = (
		forms: JobApplicationForm[],
	): void => {
		const formsJson = JSON.stringify(forms);
		localStorage.setItem(this.applicationFormStorageKey, formsJson);
	};

	private loadApplicationFormFromStorage = (
		jobId: Job["id"],
	): JobApplicationForm | null => {
		const allForms = this.loadApplicationFormsFromStorage();

		if (!allForms) {
			return null;
		}

		return allForms.find((form) => form.jobId === jobId) || null;
	};

	private saveApplicationFormToStorage = (form: JobApplicationForm): void => {
		const allForms = this.loadApplicationFormsFromStorage() || [];
		const formIndex = allForms.findIndex((f) => f.id === form.id);

		if (formIndex > -1) {
			allForms[formIndex] = form;
		} else {
			allForms.push(form);
		}
		this.saveApplicationFormsToStorage(allForms);
	};

	public getJobByIdentifier = async (
		identifier: JobDto["id"] | JobDto["slug"],
	): Promise<Job | null> => {
		try {
			const response = await this.client.get(this.endpoint, {
				params: identifier,
			});
			const validated = JobDto(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			const job = toJob(validated);
			this.saveJobToStorage(job);
			return job;
		} catch {
			const storedJob = this.loadJobFromStorage(identifier);
			return storedJob;
		}
	};

	public getJobs = async (query?: {
		search: JobDto["title"];
	}): Promise<Job[]> => {
		try {
			const response = await this.client.get(this.endpoint, {
				params: query,
			});
			const validated = JobDto.array()(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			const apiJobs = validated.map((jobDto) => toJob(jobDto));
			this.saveJobsToStorage(apiJobs);

			return apiJobs.filter((job) =>
				query
					? job.title.toLowerCase().includes(query.search.toLowerCase())
					: true,
			);
		} catch {
			const storedJobs = this.loadJobsFromStorage();
			console.log(storedJobs);
			if (!storedJobs) return [];

			return storedJobs.filter((job) =>
				query
					? job.title.toLowerCase().includes(query.search.toLowerCase())
					: true,
			);
		}
	};

	public getApplicationFormByJobId = async (
		jobId: Job["id"],
	): Promise<JobApplicationForm | null> => {
		try {
			const response = await this.client.get(`${this.endpoint}/${jobId}/form`);
			const validated = JobApplicationForm(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			this.saveApplicationFormToStorage(validated);
			return validated;
		} catch {
			const storedForm = this.loadApplicationFormFromStorage(jobId);
			return storedForm;
		}
	};

	public mutateJob = async (job: Job): Promise<Job> => {
		try {
			let response;
			if (job.id) {
				response = await this.client.put(`${this.endpoint}/${job.id}`, job);
			} else {
				response = await this.client.post(this.endpoint, job);
			}

			const validated = JobDto(response.data);
			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			const savedJob = toJob(validated);

			this.saveJobToStorage(savedJob);

			return savedJob;
		} catch {
			this.saveJobToStorage(job);
			return job;
		}
	};

	public mutateApplicationForm = async (
		applicationForm: JobApplicationForm,
	): Promise<JobApplicationForm> => {
		try {
			const response = await this.client.post(
				`${this.endpoint}/${applicationForm.jobId}/form`,
				applicationForm,
			);

			const validated = JobApplicationForm(response.data);
			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			this.saveApplicationFormToStorage(validated);

			return validated;
		} catch {
			this.saveApplicationFormToStorage(applicationForm);
			return applicationForm;
		}
	};
}
