import type { JobDto } from "./job.dto";
import type { Job } from "./job.type";

export const toJob = (dto: JobDto): Job => {
	return {
		id: dto.id,
		slug: dto.slug,
		title: dto.title,
		salary: dto.salary,
		startDate: new Date(dto.startDate),
		status: dto.status,
	};
};
