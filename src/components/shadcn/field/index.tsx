import { Label } from "-/components/shadcn/label";
import { Separator } from "-/components/shadcn/separator";

import { cn } from "-/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { useMemo } from "react";
import { fieldVariants } from "./field-variants";

export const FieldSet = ({
	className,
	...props
}: React.ComponentProps<"fieldset">) => {
	return (
		<fieldset
			data-slot="field-set"
			className={cn(
				"flex flex-col gap-6",
				"has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldLegend = ({
	className,
	variant = "legend",
	...props
}: React.ComponentProps<"legend"> & {
	variant?: "legend" | "label";
}) => {
	return (
		<legend
			data-slot="field-legend"
			data-variant={variant}
			className={cn(
				"mb-3 font-medium",
				"data-[variant=legend]:text-base",
				"data-[variant=label]:text-sm",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldGroup = ({
	className,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div
			data-slot="field-group"
			className={cn(
				"group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
				className,
			)}
			{...props}
		/>
	);
};

export const Field = ({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) => {
	return (
		<div
			role="group"
			data-slot="field"
			data-orientation={orientation}
			className={cn(
				fieldVariants({
					orientation,
				}),
				className,
			)}
			{...props}
		/>
	);
};

export const FieldContent = ({
	className,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div
			data-slot="field-content"
			className={cn(
				"group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldLabel = ({
	className,
	...props
}: React.ComponentProps<typeof Label>) => {
	return (
		<Label
			data-slot="field-label"
			className={cn(
				"group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
				"has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
				"has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldTitle = ({
	className,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div
			data-slot="field-label"
			className={cn(
				"flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldDescription = ({
	className,
	...props
}: React.ComponentProps<"p">) => {
	return (
		<p
			data-slot="field-description"
			className={cn(
				"font-normal text-muted-foreground text-sm leading-normal group-has-data-[orientation=horizontal]/field:text-balance",
				"nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0",
				"[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
				className,
			)}
			{...props}
		/>
	);
};

export const FieldSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<"div"> & {
	children?: React.ReactNode;
}) => {
	return (
		<div
			data-slot="field-separator"
			data-content={!!children}
			className={cn(
				"-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm",
				className,
			)}
			{...props}
		>
			<Separator className="absolute inset-0 top-1/2" />
			{children && (
				<span
					className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
					data-slot="field-separator-content"
				>
					{children}
				</span>
			)}
		</div>
	);
};

export const FieldError = ({
	className,
	children,
	errors,
	...props
}: React.ComponentProps<"div"> & {
	errors?: Array<
		| {
				message?: string;
		  }
		| undefined
	>;
}) => {
	const content = useMemo(() => {
		if (children) {
			return children;
		}

		if (!errors?.length) {
			return null;
		}

		const uniqueErrors = [
			...new Map(errors.map((error) => [error?.message, error])).values(),
		];

		if (uniqueErrors?.length == 1) {
			return uniqueErrors[0]?.message;
		}

		return (
			<ul className="ml-4 flex list-disc flex-col gap-1">
				{uniqueErrors.map(
					(error, index) =>
						error?.message && <li key={index}>{error.message}</li>,
				)}
			</ul>
		);
	}, [children, errors]);

	if (!content) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cn("font-normal text-destructive text-sm", className)}
			{...props}
		>
			{content}
		</div>
	);
};
