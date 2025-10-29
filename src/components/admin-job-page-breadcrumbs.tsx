import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./shadcn/button";

export const AdminJobPageBreadcrumbs = () => {
	return (
		<div className="flex items-center gap-2">
			<Button
				variant="outline"
				asChild
			>
				<Link to="/admin">Daftar Pekerjaan</Link>
			</Button>
			<ChevronRight />
			<Button
				variant="outline"
				disabled
			>
				Daftar Kandidat
			</Button>
		</div>
	);
};
