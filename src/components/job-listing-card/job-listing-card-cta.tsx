import type { JobModel } from "-/domains/job/job.model";
import { Link } from "react-router";
import { Button } from "../shadcn/button";

export const JobListingCardCta = ({ job }: { job: JobModel }) => {
	const jobUrl = `job/${job.get("slug")}`;
	return (
		<Button
			size="sm"
			asChild
		>
			<Link to={jobUrl}>Manage Job</Link>
		</Button>
	);
};
