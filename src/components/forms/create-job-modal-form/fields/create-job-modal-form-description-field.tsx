import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Textarea } from "-/components/shadcn/textarea";
import { Controller, useFormContext } from "react-hook-form";
import {
	type CreateJobModalFormSchema,
	createJobModalFormId,
} from "../create-job-modal-form-schema";

const fieldName = "description";

export const CreateJobModalFormDescriptionField = () => {
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
						Deskripsi Pekerjaan
					</FieldLabel>
					<Textarea
						{...field}
						id={`${createJobModalFormId}-${fieldName}`}
						aria-invalid={fieldState.invalid}
					/>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
