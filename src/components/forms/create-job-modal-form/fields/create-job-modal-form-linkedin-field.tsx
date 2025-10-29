import { FormFieldError } from "-/components/form-field-error";
import { Badge } from "-/components/shadcn/badge";
import { Field, FieldLabel } from "-/components/shadcn/field";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "-/components/shadcn/select";
import { cn } from "-/lib/utils";
import { Controller, useFormContext } from "react-hook-form";
import {
	type CreateJobModalFormSchema,
	createJobModalFormId,
} from "../create-job-modal-form-schema";

const fieldName = "mpiLinkedin";

const statuses = [
	{ label: "Wajib", value: true },
	{ label: "Opsional", value: false },
	{ label: "Mati", value: undefined },
];

export const CreateJobModalFormLinkedinField = () => {
	const form = useFormContext<CreateJobModalFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => {
				const isActive = (value?: Boolean) => field.value === value;
				return (
					<Field
						orientation="horizontal"
						data-invalid={fieldState.invalid}
					>
						<FieldLabel htmlFor={`${createJobModalFormId}-${fieldName}`}>
							Link LinkedIn
						</FieldLabel>
						<Select
							name={field.name}
							value={
								field.value === undefined
									? "NaN"
									: Number(field.value).toString()
							}
							onValueChange={(value) => {
								form.setValue(
									field.name,
									value === "NaN" ? undefined : Boolean(Number(value)),
								);
							}}
						>
							<SelectTrigger
								id={`${createJobModalFormId}-${fieldName}`}
								aria-invalid={fieldState.invalid}
								className="min-w-28 sm:hidden"
								size="sm"
							>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{statuses.map((status) => (
									<SelectItem
										key={status.label}
										value={Number(status.value).toString()}
									>
										{status.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<div className="hidden sm:contents">
							{statuses.map((status) => (
								<Badge
									key={status.label}
									variant="outline"
									color={isActive(status.value) ? "primary" : "neutral"}
									className={cn("hover:cursor-pointer")}
									onClick={() => form.setValue(field.name, status.value)}
								>
									{status.label}
								</Badge>
							))}
						</div>
						<FormFieldError fieldState={fieldState} />
					</Field>
				);
			}}
		/>
	);
};
