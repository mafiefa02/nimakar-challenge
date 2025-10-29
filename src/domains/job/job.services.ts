import type { JobApi } from "./job.api";
import { JobModel } from "./job.model";

export class JobService {
	private api: JobApi;

	constructor(api: JobApi) {
		this.api = api;
	}

	public getJobByIdentifier = async (
		...args: Parameters<JobApi["getJobByIdentifier"]>
	) => {
		const job = await this.api.getJobByIdentifier(...args);
		return new JobModel(job);
	};

	public getJobs = async (...args: Parameters<JobApi["getJobs"]>) => {
		const jobs = await this.api.getJobs(...args);
		return jobs.map((job) => new JobModel(job));
	};
}
