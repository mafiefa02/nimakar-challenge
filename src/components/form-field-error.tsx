import { AlertTriangleIcon } from "lucide-react";
import type { ControllerFieldState } from "react-hook-form";
import { FieldError } from "./shadcn/field";

export const FormFieldError = ({
	fieldState,
}: {
	fieldState: ControllerFieldState;
}) => {
	const { invalid, error } = fieldState;

	if (!invalid) return;

	return (
		<div className="flex items-center gap-2">
			<AlertTriangleIcon className="size-4" />
			<FieldError errors={[error]} />
		</div>
	);
};
