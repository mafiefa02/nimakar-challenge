import { arktypeResolver } from "@hookform/resolvers/arktype";
import { useAuthenticate } from "-/domains/user/hooks/use-authenticate";
import { cn } from "-/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import {
	type LoginPasswordFormSchema as FormSchema,
	loginPasswordFormId as formId,
	loginPasswordFormSchema as formSchema,
} from "./login-password-form-schema";

export const LoginPasswordForm = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"form">) => {
	const { login } = useAuthenticate();

	const onSubmit = (values: FormSchema) => login(values);

	const form = useForm<FormSchema>({
		resolver: arktypeResolver(formSchema),
		mode: "onSubmit",
		defaultValues: {
			email: "",
			password: "",
		},
	});

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
