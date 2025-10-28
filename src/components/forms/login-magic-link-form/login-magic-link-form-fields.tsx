import { Field, FieldError, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import { loginMagicLinkFormId as formId } from "./login-magic-link-form-schema";

export const LoginMagicLinkFormFields = () => {
	const form = useFormContext();
	return (
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
	);
};
