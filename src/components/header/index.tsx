import { cn } from "-/lib/utils";

export const Header = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"header">) => {
	return (
		<header
			className={cn("flex items-center justify-between gap-4", className)}
			{...props}
		>
			{children}
		</header>
	);
};
