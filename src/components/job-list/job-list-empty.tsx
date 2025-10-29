import { useDebounce } from "@uidotdev/usehooks";
import emptyIllustration from "-/assets/empty-illustration.png";
import { parseAsString, useQueryState } from "nuqs";
import { Button } from "../shadcn/button";

export const JobListEmpty = () => {
	const [searchQuery] = useQueryState("search", parseAsString.withDefault(""));
	const search = useDebounce(searchQuery, 150);

	const headingText = search
		? `Job ${search} not found`
		: "No job openings available";

	const descriptionText = search
		? "Unfortunately, we can't find the job you're looking for."
		: "Create a job opening now and start the candidate process.";

	return (
		<div className="my-auto flex flex-col items-center justify-center gap-4">
			<img
				src={emptyIllustration}
				alt="Person looking for file"
				className="aspect-auto size-60"
			/>
			<div className="flex flex-col gap-1 text-center">
				<h1 className="font-bold text-heading-sm">{headingText}</h1>
				<p className="text-lg">{descriptionText}</p>
			</div>
			<Button variant="secondary">Create a new job</Button>
		</div>
	);
};
