import type { JobModel } from "-/domains/job/job.model";

import { Card, CardContent } from "../shadcn/card";
import { JobListingCardCta } from "./job-listing-card-cta";
import { JobListingCardDate } from "./job-listing-card-date";
import { JobListingCardInfo } from "./job-listing-card-info";
import { JobListingCardStatus } from "./job-listing-card-status";

export const JobListingCard = ({ job }: { job: JobModel }) => {
	return (
		<Card className="py-6">
			<CardContent className="flex flex-col gap-3 px-6">
				<div className="flex items-center gap-3">
					<JobListingCardStatus job={job} />
					<JobListingCardDate job={job} />
				</div>
				<div className="flex items-end justify-between gap-4">
					<JobListingCardInfo job={job} />
					<JobListingCardCta job={job} />
				</div>
			</CardContent>
		</Card>
	);
};
