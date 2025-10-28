import { arktypeResolver } from "@hookform/resolvers/arktype";
import { cn } from "-/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import {
	type LoginPasswordFormSchema as FormSchema,
	loginPasswordFormId as formId,
	loginPasswordFormSchema as formSchema,
} from "./login-password-form-schema";

export const LoginPasswordFormProvider = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"form">) => {
	const form = useForm<FormSchema>({
		resolver: arktypeResolver(formSchema),
		mode: "onSubmit",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: FormSchema) => {
		console.log(values);
	};

	return (
		<FormProvider {...form}>
			<form
				id={formId}
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn("contents", className)}
				{...props}
			>
				{children}
			</form>
		</FormProvider>
	);
};
