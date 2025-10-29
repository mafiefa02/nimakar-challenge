import type { JobModel } from "-/domains/job/job.model";
import { format } from "date-fns";
import { Link } from "react-router";
import { Badge } from "./shadcn/badge";
import { Button } from "./shadcn/button";
import { Card, CardContent } from "./shadcn/card";

export const JobListingCard = ({ job }: { job: JobModel }) => {
	return (
		<Card className="py-6">
			<CardContent className="flex flex-col gap-3 px-6">
				<div className="flex items-center gap-3">
					<Badge
						className="w-fit font-bold text-base md:text-sm lg:text-base"
						variant="outline"
						color="success"
					>
						{job.jobStatusDisplay}
					</Badge>
					<Badge
						className="w-fit text-base md:text-sm lg:text-base"
						variant="outline"
						color="neutral"
					>
						started on {format(job.get("startDate"), "PPP")}
					</Badge>
				</div>
				<div className="flex items-end justify-between gap-4">
					<div className="flex flex-col gap-2">
						<p className="font-bold text-xl md:text-lg lg:text-xl">
							{job.get("title")}
						</p>
						<p className="text-lg text-neutral-80 md:text-md lg:text-lg">
							{job.salaryRangeDisplay}
						</p>
					</div>
					<Button
						size="sm"
						asChild
					>
						<Link to={`job/${job.get("slug")}`}>Manage Job</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};
