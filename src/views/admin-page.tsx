import { useSuspenseQuery } from "@tanstack/react-query";
import { Header } from "-/components/header";
import { HeaderTitle } from "-/components/header/header-title";
import { JobListingCard } from "-/components/job-listing-card";
import { NewJobCtaCard } from "-/components/new-job-cta-card";
import { Input } from "-/components/shadcn/input";
import { UserProfile } from "-/components/user-profile";
import { jobService } from "-/domains/job";
import { parseAsString, useQueryState } from "nuqs";

export const AdminPage = () => {
	const [search, setSearch] = useQueryState(
		"search",
		parseAsString.withDefault(""),
	);

	const { data: jobs } = useSuspenseQuery({
		queryKey: [
			"jobs",
			{
				search,
			},
		],
		queryFn: async () =>
			await jobService.getJobs({
				search,
			}),
	});

	return (
		<>
			<Header>
				<HeaderTitle>Job List</HeaderTitle>
				<UserProfile />
			</Header>
			<main className="size-full overflow-y-auto">
				<div className="mx-auto max-w-5xl px-6 py-4">
					<div className="grid grid-cols-[1fr_auto] gap-6">
						<div className="flex flex-col gap-4">
							<Input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search by job details"
							/>
							<div className="flex flex-col gap-4">
								{jobs?.map((job) => (
									<JobListingCard
										key={job.get("id")}
										job={job}
									/>
								))}
							</div>
						</div>
						<NewJobCtaCard />
					</div>
				</div>
			</main>
		</>
	);
};
