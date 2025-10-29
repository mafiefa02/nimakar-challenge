import type { JobModel } from "-/domains/job/job.model";
import { format } from "date-fns";
import { Badge } from "../shadcn/badge";

export const JobListingCardDate = ({ job }: { job: JobModel }) => {
	return (
		<Badge
			className="w-fit text-base md:text-sm lg:text-base"
			variant="outline"
			color="neutral"
		>
			started on {format(job.get("startDate"), "PPP")}
		</Badge>
	);
};
