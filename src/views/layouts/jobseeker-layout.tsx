import { Header } from "-/components/header";
import { HeaderTitle } from "-/components/header/header-title";
import { UserProfile } from "-/components/user-profile";
import { Outlet } from "react-router";

export const JobseekerLayout = () => {
	return (
		<>
			<Header>
				<HeaderTitle>Job Portal</HeaderTitle>
				<UserProfile />
			</Header>
			<main className="mx-auto size-full max-w-5xl overflow-y-auto px-6 py-4">
				<Outlet />
			</main>
		</>
	);
};
