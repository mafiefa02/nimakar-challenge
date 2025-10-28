import { cn } from "-/lib/utils";

export const Header = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"header">) => {
	return (
		<header
			className="w-full border-b py-2"
			{...props}
		>
			<div
				className={cn(
					"mx-auto flex max-w-5xl items-center justify-between gap-4 px-6",
					className,
				)}
			>
				{children}
			</div>
		</header>
	);
};
