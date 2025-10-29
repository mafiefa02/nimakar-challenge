import warningIllustration from "-/assets/warning-illustration.png";
import { Button } from "-/components/shadcn/button";
import { Link, useNavigate } from "react-router";

export const ErrorElement = () => {
	const navigate = useNavigate();
	const refreshPage = () => navigate(0);

	return (
		<div className="my-auto flex flex-col items-center justify-center gap-4">
			<img
				src={warningIllustration}
				alt="Exclamation mark"
				className="aspect-auto size-60"
			/>
			<div className="flex flex-col gap-1 text-center">
				<h1 className="text-pretty font-bold text-heading-sm">
					Something went wrong!
				</h1>
				<p className="text-pretty text-lg">
					Try reloading the page, or go back to the homepage.
				</p>
			</div>
			<div className="flex items-center gap-4">
				<Button
					variant="outline"
					onClick={refreshPage}
				>
					Reload
				</Button>
				<Button
					variant="secondary"
					asChild
				>
					<Link to="/">Back home</Link>
				</Button>
			</div>
		</div>
	);
};
