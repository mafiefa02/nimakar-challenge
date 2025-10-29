import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import {
	type CreateJobModalFormSchema,
	createJobModalFormId,
} from "../create-job-modal-form-schema";

const fieldName = "maximumPay";

export const CreateJobModalFormMaximumPayField = () => {
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
						Perkiraan Gaji Maksimum
					</FieldLabel>
					<Input
						{...field}
						id={`${createJobModalFormId}-${fieldName}`}
						aria-invalid={fieldState.invalid}
						value={`Rp ${field.value}`}
						onChange={(e) =>
							isNaN(Number(e.target.value.replace("Rp ", "")))
								? undefined
								: form.setValue(
										field.name,
										Number(e.target.value.replace("Rp ", "")),
									)
						}
					/>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
