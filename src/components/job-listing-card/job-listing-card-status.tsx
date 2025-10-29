import type { JobModel } from "-/domains/job/job.model";
import { Badge } from "../shadcn/badge";

export const JobListingCardStatus = ({ job }: { job: JobModel }) => {
	return (
		<Badge
			className="w-fit font-bold text-base md:text-sm lg:text-base"
			variant="outline"
			color="success"
		>
			{job.jobStatusDisplay}
		</Badge>
	);
};
