import logo from "-/assets/logo.png";
import { cn } from "-/lib/utils";

export const Brand = ({
	className,
	...props
}: Omit<React.ComponentPropsWithoutRef<"img">, "src" | "alt">) => {
	return (
		<img
			className={cn("aspect-772/109 shrink-0", className)}
			alt="Nimakar Logo"
			src={logo}
			{...props}
		/>
	);
};
