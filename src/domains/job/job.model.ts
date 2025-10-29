import { formatNumberToCurrency } from "-/lib/utils";
import type { Job } from "./job.type";

const JOB_STATUS_MAP: Record<Job["status"], string> = {
	active: "Active",
	inactive: "Inactive",
	draft: "Draft",
};

export class JobModel {
	private job: Job;

	constructor(job: Job) {
		this.job = {
			...job,
		};
	}

	get data(): Job {
		return {
			...this.job,
		};
	}

	public get<K extends keyof Job>(key: K) {
		return this.job[key];
	}

	public set<K extends keyof Job>(key: K, value: Job[K]): Job {
		this.job[key] = value;
		return {
			...this.job,
		};
	}

	public update(data: Partial<Job>): Job {
		this.job = {
			...this.job,
			...data,
		};
		return {
			...this.job,
		};
	}

	get salaryRangeDisplay(): string {
		const currency = this.job.salary.currency;
		const formattedMin = formatNumberToCurrency({
			amount: this.job.salary.min,
			currency,
		});
		const formattedMax = formatNumberToCurrency({
			amount: this.job.salary.max,
			currency,
		});

		return `${formattedMin} - ${formattedMax}`;
	}

	get jobStatusDisplay(): string {
		return JOB_STATUS_MAP[this.job.status];
	}
}
