import { Header } from "-/components/header";
import { HeaderTitle } from "-/components/header/header-title";
import { UserProfile } from "-/components/user-profile";

export const AdminPage = () => {
	return (
		<>
			<Header>
				<HeaderTitle>Job List</HeaderTitle>
				<UserProfile />
			</Header>
			<main className="size-full overflow-y-auto">
				<p>Admin page</p>
			</main>
		</>
	);
};
