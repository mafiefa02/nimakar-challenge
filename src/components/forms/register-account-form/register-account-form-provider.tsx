import { arktypeResolver } from "@hookform/resolvers/arktype";
import { cn } from "-/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import {
	type RegisterAccountFormSchema as FormSchema,
	registerAccountFormId as formId,
	registerAccountFormSchema as formSchema,
} from "./register-account-form-schema";

export const RegisterAccountFormProvider = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"form">) => {
	const form = useForm<FormSchema>({
		resolver: arktypeResolver(formSchema),
		mode: "onSubmit",
		defaultValues: {
			email: "",
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
