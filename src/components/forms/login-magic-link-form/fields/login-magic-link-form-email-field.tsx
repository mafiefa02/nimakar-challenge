import { FormFieldError } from "-/components/form-field-error";
import { Field, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { Controller, useFormContext } from "react-hook-form";
import {
	type LoginMagicLinkFormSchema,
	loginMagicLinkFormId,
} from "../login-magic-link-form-schema";

const fieldName = "email";

export const LoginMagicLinkFormEmailField = () => {
	const form = useFormContext<LoginMagicLinkFormSchema>();
	return (
		<Controller
			name={fieldName}
			control={form.control}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={`${loginMagicLinkFormId}-${fieldName}`}>
						Alamat email
					</FieldLabel>
					<Input
						{...field}
						id={`${loginMagicLinkFormId}-${fieldName}`}
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
