import type { CreateJobModalFormSchema } from "-/components/forms/create-job-modal-form/create-job-modal-form-schema";
import type { JobApi } from "./job.api";
import { JobModel } from "./job.model";
import {
	createFormToJob,
	createFormToJobApplicationForm,
} from "./job.transform";
import type { JobApplicationForm } from "./job.type";

export class JobService {
	private api: JobApi;

	constructor(api: JobApi) {
		this.api = api;
	}

	public getJobByIdentifier = async (
		...args: Parameters<JobApi["getJobByIdentifier"]>
	): Promise<JobModel | null> => {
		const job = await this.api.getJobByIdentifier(...args);
		return job ? new JobModel(job) : null;
	};

	public getJobs = async (...args: Parameters<JobApi["getJobs"]>) => {
		const jobs = await this.api.getJobs(...args);
		return jobs.map((job) => new JobModel(job));
	};

	public getApplicationFormByJobId = async (
		...args: Parameters<JobApi["getApplicationFormByJobId"]>
	): Promise<JobApplicationForm | null> => {
		return this.api.getApplicationFormByJobId(...args);
	};

	public mutateJob = (form: CreateJobModalFormSchema) => {
		const job = createFormToJob(form);
		return this.api.mutateJob(job);
	};

	public mutateApplicationForm = (form: CreateJobModalFormSchema) => {
		const job = createFormToJobApplicationForm(form);
		return this.api.mutateApplicationForm(job);
	};
}
