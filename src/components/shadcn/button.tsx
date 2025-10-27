import { cn } from "-/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";

const buttonVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md px-4 py-1 font-bold outline-none transition-all focus-visible:ring-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-neutral-60 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-neutral-10 hover:bg-primary-hover focus-visible:border-primary-border focus-visible:bg-primary-focused focus-visible:text-primary-border focus-visible:ring-primary-border aria-pressed:bg-primary-pressed",
				outline:
					"border border-neutral-40 bg-background shadow-xs hover:bg-neutral-20 focus-visible:border-neutral-40 focus-visible:bg-neutral-30/20 focus-visible:ring-neutral-40 aria-pressed:bg-neutral-30",
				secondary:
					"bg-secondary text-neutral-90 hover:bg-secondary-hover focus-visible:border-secondary-border focus-visible:bg-secondary-focused focus-visible:text-secondary focus-visible:ring-secondary-border aria-pressed:bg-secondary-pressed",
			},
			size: {
				default: "h-9 text-base",
				sm: "h-8 text-sm",
				lg: "h-10 py-1.5 text-lg",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? SlotPrimitive.Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					size,
					className,
				}),
			)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
