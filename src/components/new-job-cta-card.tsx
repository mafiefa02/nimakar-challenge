import joblistIllustration from "-/assets/joblist-illustration.jpg";
import { Button } from "./shadcn/button";
import { Card, CardContent } from "./shadcn/card";

export const NewJobCtaCard = () => {
	return (
		<Card className="sticky top-4 h-fit overflow-hidden rounded-2xl bg-neutral-100 py-0">
			<img
				alt="Job list illustration"
				src={joblistIllustration}
				className="-z-10 absolute opacity-15"
			/>
			<CardContent className="flex flex-col gap-6 p-10">
				<div className="flex flex-col gap-1 text-background">
					<strong className="text-heading-sm">
						Recruit the best candidates
					</strong>
					<strong>Create jobs, invite, and hire with ease</strong>
				</div>
				<Button>Create a new job</Button>
			</CardContent>
		</Card>
	);
};
