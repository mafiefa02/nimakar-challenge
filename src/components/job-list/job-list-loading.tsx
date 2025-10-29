import { Skeleton } from "../shadcn/skeleton";

export const JobListLoading = () => {
	const numPlaceholders = Math.floor(Math.random() * 4) + 3;
	const placeholders = Array.from({ length: numPlaceholders }, (_, index) => ({
		key: index,
	}));

	return (
		<div className="flex flex-col gap-4">
			{placeholders.map((placeholder) => (
				<Skeleton
					key={placeholder.key}
					className="h-36"
				/>
			))}
		</div>
	);
};
