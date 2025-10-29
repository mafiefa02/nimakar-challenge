import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "-/components/shadcn/select";
import type { JobOpening } from "-/domains/job/job.type";
import { Controller, useFormContext } from "react-hook-form";
import {
	type CreateJobModalFormSchema,
	createJobModalFormId,
} from "../create-job-modal-form-schema";

const fieldName = "type";

const jobTypeOptions: Record<JobOpening["type"], string> = {
	contract: "Kontrak",
	"full-time": "Penuh Waktu",
	"part-time": "Paruh Waktu",
	internship: "Magang",
	freelance: "Freelance",
};

export const CreateJobModalFormTypeField = () => {
	const form = useFormContext<CreateJobModalFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel
						data-required={true}
						htmlFor={`${createJobModalFormId}-${fieldName}`}
					>
						Tipe Pekerjaan
					</FieldLabel>
					<Select
						required
						name={field.name}
						value={field.value ?? ""}
						onValueChange={field.onChange}
					>
						<SelectTrigger
							id={`${createJobModalFormId}-${fieldName}`}
							aria-invalid={fieldState.invalid}
						>
							<SelectValue placeholder="Pilih tipe pekerjaan" />
						</SelectTrigger>
						<SelectContent>
							{Object.entries(jobTypeOptions).map(([value, label]) => (
								<SelectItem
									key={value}
									value={value}
								>
									{label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
