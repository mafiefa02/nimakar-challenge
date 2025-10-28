import { cn } from "-/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";
import { badgeVariants } from "./badge-variants";

export const Badge = ({
	className,
	variant,
	color,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	}) => {
	const Comp = asChild ? SlotPrimitive.Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(
				badgeVariants({
					variant,
					color,
					size,
				}),
				className,
			)}
			{...props}
		/>
	);
};
