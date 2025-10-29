import type { JobModel } from "-/domains/job/job.model";

export const JobListingCardInfo = ({ job }: { job: JobModel }) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="font-bold text-xl md:text-lg lg:text-xl">
				{job.get("title")}
			</p>
			<p className="text-lg text-neutral-80 md:text-md lg:text-lg">
				{job.salaryRangeDisplay}
			</p>
		</div>
	);
};
