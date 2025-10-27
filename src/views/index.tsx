import { Button } from "-/components/shadcn/button";
import { BellIcon } from "lucide-react";

export const Home = () => {
	return (
		<div className="flex items-center gap-2">
			<Button>
				<BellIcon /> Default
			</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
		</div>
	);
};
