import { AdminJobPageBreadcrumbs } from "-/components/admin-job-page-breadcrumbs";
import { Header } from "-/components/header";
import { UserProfile } from "-/components/user-profile";
import { adminJobPageLoader } from "-/loaders/admin-job-page-loader";
import { useLoaderData } from "react-router";

export const AdminJobPage = () => {
	const { applicationForm } = useLoaderData<typeof adminJobPageLoader>();
	return (
		<>
			<Header>
				<AdminJobPageBreadcrumbs />
				<UserProfile />
			</Header>
			<p>{JSON.stringify(applicationForm)}</p>
		</>
	);
};
