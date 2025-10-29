import { useSuspenseQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { JobListingCard } from "-/components/job-listing-card";
import { getJobsQueryOptions } from "-/domains/job/queries/get-jobs-query";
import { parseAsString, useQueryState } from "nuqs";
import { ErrorElement } from "../error-element";
import { JobListEmpty } from "./job-list-empty";

export const JobList = () => {
	const [searchQuery] = useQueryState(
		"search",
		parseAsString.withDefault("").withOptions({ history: "replace" }),
	);
	const search = useDebounce(searchQuery, 150);

	const { data: jobs, isError } = useSuspenseQuery(
		getJobsQueryOptions([{ search }]),
	);
	console.log({ query: getJobsQueryOptions([{ search }]) });

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
