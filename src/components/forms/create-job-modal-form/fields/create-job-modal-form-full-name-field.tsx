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

const fieldName = "mpiFullName";

const statuses = [
	{ label: "Wajib", value: "required" },
	{ label: "Opsional", value: "optional" },
	{ label: "Mati", value: "off" },
];

export const CreateJobModalFormFullNameField = () => {
	const form = useFormContext<CreateJobModalFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => {
				const isActive = (value: string) => field.value === value;
				return (
					<Field
						orientation="horizontal"
						data-invalid={fieldState.invalid}
					>
						<FieldLabel htmlFor={`${createJobModalFormId}-${fieldName}`}>
							Nama Lengkap
						</FieldLabel>
						<Select
							name={field.name}
							value={field.value}
							onValueChange={field.onChange}
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
										value={status.value}
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
									variant={isActive(status.value) ? "outline" : "disabled"}
									color="primary"
									className={cn(
										"hover:cursor-pointer",
										isActive(status.value)
											? "hover:border-primary"
											: "hover:border-neutral-50",
									)}
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
