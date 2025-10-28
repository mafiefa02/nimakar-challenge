import { cn } from "-/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";

const badgeVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded border px-2 py-0.5 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
	{
		variants: {
			variant: {
				filled: "",
				outline: "",
			},
			size: {
				small: "text-sm [&>svg]:size-2.5",
				big: "text-md [&>svg]:size-4",
			},
			color: {
				success: "",
				danger: "",
				secondary: "",
			},
		},
		compoundVariants: [
			{
				variant: "filled",
				color: "danger",
				class: "bg-destructive text-background",
			},
			{
				variant: "outline",
				color: "danger",
				class:
					"border-destructive-border bg-destructive-surface text-destructive",
			},
			{
				variant: "filled",
				color: "secondary",
				class: "bg-secondary text-background",
			},
			{
				variant: "outline",
				color: "secondary",
				class: "border-secondary-border bg-secondary-surface text-secondary",
			},
			{
				variant: "filled",
				color: "success",
				class: "bg-success text-background",
			},
			{
				variant: "outline",
				color: "success",
				class: "border-success-border bg-success-surface text-success",
			},
		],
		defaultVariants: {
			variant: "filled",
			color: "success",
			size: "small",
		},
	},
);

function Badge({
	className,
	variant,
	color,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	}) {
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
}

export { Badge, badgeVariants };
