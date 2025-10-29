import { type } from "arktype";
import type { AxiosInstance } from "axios";
import { JobDto } from "./job.dto";
import { toJob } from "./job.transform";
import type { Job } from "./job.type";

const defaultJob: Job = {
	id: "job_20251029_1",
	slug: "fe",
	title: "Frontend",
	startDate: new Date(),
	salary: {
		min: 100000,
		max: 200000,
		currency: "IDR",
	},
	status: "active",
};

export class JobApi {
	private endpoint: string;
	private client: AxiosInstance;

	constructor(endpoint: string, client: AxiosInstance) {
		this.endpoint = endpoint;
		this.client = client;
	}

	public getJobByIdentifier = async (
		identifier: Job["id"] | Job["slug"],
	): Promise<Job> => {
		try {
			const response = await this.client.get(this.endpoint, {
				params: identifier,
			});
			const validated = JobDto(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			return toJob(validated);
		} catch {
			return defaultJob;
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

			return validated
				.filter((job) =>
					query
						? job.title.toLowerCase().includes(query.search.toLowerCase())
						: job,
				)
				.map((jobDto) => toJob(jobDto));
		} catch {
			return [
				defaultJob,
			].filter((job) =>
				query
					? job.title.toLowerCase().includes(query.search.toLowerCase())
					: job,
			);
		}
	};
}
