import { cva } from "class-variance-authority";

export const badgeVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded border px-2 py-0.5 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
	{
		variants: {
			variant: {
				filled: "",
				outline: "",
				disabled:
					"border-border bg-neutral-30 text-neutral-60 hover:cursor-not-allowed!",
			},
			size: {
				small: "text-sm [&>svg]:size-2.5",
				big: "text-md [&>svg]:size-4",
			},
			color: {
				success: "",
				danger: "",
				secondary: "",
				neutral: "",
				primary: "",
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
			{
				variant: "filled",
				color: "neutral",
				class: "border-border bg-neutral-20",
			},
			{
				variant: "outline",
				color: "neutral",
				class: "border-border bg-transparent",
			},
			{
				variant: "filled",
				color: "primary",
				class: "bg-primary text-background",
			},
			{
				variant: "outline",
				color: "primary",
				class: "border-primary-border bg-primary-surface text-primary",
			},
		],
		defaultVariants: {
			variant: "filled",
			color: "success",
			size: "small",
		},
	},
);
