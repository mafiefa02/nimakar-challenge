import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import {
	type RegisterAccountFormSchema,
	registerAccountFormId,
} from "../register-account-form-schema";

const fieldName = "email";

export const RegisterAccountFormEmailField = () => {
	const form = useFormContext<RegisterAccountFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={`${registerAccountFormId}-${fieldName}`}>
						Alamat email
					</FieldLabel>
					<Input
						{...field}
						id={`${registerAccountFormId}-${fieldName}`}
						aria-invalid={fieldState.invalid}
						placeholder="contoh@email.com"
						type="email"
					/>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
