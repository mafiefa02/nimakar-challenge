import { Brand } from "-/components/brand";
import { Outlet } from "react-router";

export const AuthLayout = () => {
	return (
		<div className="flex h-dvh items-center justify-center">
			<div className="flex size-full max-w-lg flex-col justify-center gap-6">
				<Brand className="h-5 w-fit" />
				<Outlet />
			</div>
		</div>
	);
};
