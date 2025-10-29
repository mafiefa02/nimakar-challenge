import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import {
	type LoginPasswordFormSchema,
	loginPasswordFormId,
} from "../login-password-form-schema";

const fieldName = "password";

export const LoginPasswordFormPasswordField = () => {
	const form = useFormContext<LoginPasswordFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={`${loginPasswordFormId}-${fieldName}`}>
						Kata sandi
					</FieldLabel>
					<Input
						{...field}
						id={`${loginPasswordFormId}-${fieldName}`}
						aria-invalid={fieldState.invalid}
						type="password"
					/>
					<FormFieldError fieldState={fieldState} />
				</Field>
			)}
		/>
	);
};
