import { arktypeResolver } from "@hookform/resolvers/arktype";
import { cn } from "-/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import {
	type LoginMagicLinkFormSchema as FormSchema,
	loginMagicLinkFormId as formId,
	loginMagicLinkFormSchema as formSchema,
} from "./login-magic-link-form-schema";

export const LoginMagicLinkFormProvider = ({
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
