import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import {
	type CreateJobModalFormSchema,
	createJobModalFormId,
} from "../create-job-modal-form-schema";

const fieldName = "candidatesAmount";

export const CreateJobModalFormCandidateAmountField = () => {
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
						Jumlah Kebutuhan Kandidat
					</FieldLabel>
					<Input
						{...field}
						id={`${createJobModalFormId}-${fieldName}`}
						aria-invalid={fieldState.invalid}
						onChange={(e) => form.setValue(field.name, Number(e.target.value))}
					/>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
