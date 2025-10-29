import { cva } from "class-variance-authority";

export const alertVariants = cva(
	"relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
	{
		variants: {
			variant: {
				filled: "",
				outline: "",
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
		},
	},
);
