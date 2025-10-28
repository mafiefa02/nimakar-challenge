import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import { loginPasswordFormId as formId } from "./login-password-form-schema";

export const LoginPasswordFormFields = () => {
	const form = useFormContext();
	return (
		<FieldGroup>
			<Controller
				name="email"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={`${formId}-email`}>Alamat email</FieldLabel>
						<Input
							{...field}
							id={`${formId}-email`}
							aria-invalid={fieldState.invalid}
							placeholder="example@email.com"
							type="email"
						/>
						{fieldState.invalid && (
							<FieldError
								errors={[
									fieldState.error,
								]}
							/>
						)}
					</Field>
				)}
			/>
			<Controller
				name="password"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={`${formId}-password`}>Kata sandi</FieldLabel>
						<Input
							{...field}
							id={`${formId}-password`}
							aria-invalid={fieldState.invalid}
							type="password"
						/>
					</Field>
				)}
			/>
		</FieldGroup>
	);
};
