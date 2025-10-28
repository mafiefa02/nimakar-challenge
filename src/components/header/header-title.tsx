import { cn } from "-/lib/utils";

export const HeaderTitle = ({
	children,
	className,
}: React.ComponentPropsWithoutRef<"div">) => {
	return <h1 className={cn("font-bold text-xl", className)}>{children}</h1>;
};
