import { Outlet } from "react-router";

export const RootLayout = () => {
	return (
		<div className="grid h-dvh grid-rows-[auto_1fr] overflow-hidden">
			<Outlet />
		</div>
	);
};
