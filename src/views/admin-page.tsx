import { CreateJobModal } from "-/components/create-job-modal";
import { CreateJobModalTrigger } from "-/components/create-job-modal/create-job-modal-trigger";
import { Header } from "-/components/header";
import { HeaderTitle } from "-/components/header/header-title";
import { JobList } from "-/components/job-list";
import { JobListLoading } from "-/components/job-list/job-list-loading";
import { JobListSearch } from "-/components/job-list/job-list-search";
import { NewJobCtaCard } from "-/components/new-job-cta-card";
import { UserProfile } from "-/components/user-profile";
import { PlusIcon } from "lucide-react";
import { Suspense } from "react";

export const AdminPage = () => {
	return (
		<>
			<Header>
				<HeaderTitle>Daftar Pekerjaan</HeaderTitle>
				<UserProfile />
			</Header>
			<main className="size-full overflow-y-auto">
				<div className="mx-auto max-w-5xl px-6 py-4">
					<CreateJobModal>
						<div className="grid grid-rows-[auto_1fr] gap-6 md:grid-cols-[1fr_auto]">
							<div className="order-last flex h-full min-h-[80dvh] flex-col gap-4 md:order-first">
								<div className="flex items-center gap-2 md:contents">
									<JobListSearch />
									<CreateJobModalTrigger className="md:hidden">
										<PlusIcon /> <p>Tambah</p>
									</CreateJobModalTrigger>
								</div>
								<Suspense fallback={<JobListLoading />}>
									<JobList />
								</Suspense>
							</div>
							<NewJobCtaCard className="sticky top-4 hidden md:block" />
						</div>
					</CreateJobModal>
				</div>
			</main>
		</>
	);
};
