import { useSuspenseQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { JobListingCard } from "-/components/job-listing-card";
import { jobService } from "-/domains/job";
import { parseAsString, useQueryState } from "nuqs";
import { ErrorElement } from "../error-element";
import { JobListEmpty } from "./job-list-empty";

export const JobList = () => {
	const [searchQuery] = useQueryState(
		"search",
		parseAsString.withDefault("").withOptions({ history: "replace" }),
	);
	const search = useDebounce(searchQuery, 150);

	const { data: jobs, isError } = useSuspenseQuery({
		queryKey: ["jobs", { search }],
		queryFn: async () => await jobService.getJobs({ search }),
	});

	if (isError) return <ErrorElement />;
	if (!jobs || jobs.length === 0) return <JobListEmpty />;

	return (
		<div className="flex flex-col gap-4">
			{jobs.map((job) => (
				<JobListingCard
					key={job.get("id")}
					job={job}
				/>
			))}
		</div>
	);
};
