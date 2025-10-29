import { cn } from "-/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			className={cn("animate-pulse bg-neutral-40 shadow-button", className)}
			{...props}
		/>
	);
}

export { Skeleton };
