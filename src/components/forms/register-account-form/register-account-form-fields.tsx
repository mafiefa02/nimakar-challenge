import { Field, FieldError, FieldLabel } from "-/components/shadcn/field";
import { Input } from "-/components/shadcn/input";
import { AlertTriangleIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { registerAccountFormId as formId } from "./register-account-form-schema";

export const RegisterAccountFormFields = () => {
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
						<div className="flex items-center gap-2">
							<AlertTriangleIcon className="size-4" />
							<FieldError
								errors={[
									fieldState.error,
								]}
							/>
						</div>
					)}
				</Field>
			)}
		/>
	);
};
