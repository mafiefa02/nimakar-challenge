import { cva } from "class-variance-authority";

export const fieldVariants = cva(
	"group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
	{
		variants: {
			orientation: {
				vertical: [
					"flex-col *:w-full [&>.sr-only]:w-auto",
				],
				horizontal: [
					"flex-row items-center",
					"*:data-[slot=field-label]:flex-auto",
					"has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
				],
				responsive: [
					"@md/field-group:flex-row flex-col @md/field-group:items-center *:w-full @md/field-group:*:w-auto [&>.sr-only]:w-auto",
					"@md/field-group:*:data-[slot=field-label]:flex-auto",
					"@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
				],
			},
		},
		defaultVariants: {
			orientation: "vertical",
		},
	},
);
