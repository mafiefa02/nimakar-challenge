import { arktypeResolver } from "@hookform/resolvers/arktype";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCreateJobModal } from "-/domains/job/hooks/use-create-job-modal";
import { mutateApplicationFormMutationOptions } from "-/domains/job/mutations/mutate-application-form";
import { mutateJobMutationOptions } from "-/domains/job/mutations/mutate-job";
import { getJobsQueryKeys } from "-/domains/job/queries/get-jobs-query";
import { cn } from "-/lib/utils";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import {
	type CreateJobModalFormSchema as FormSchema,
	createJobModalFormId as formId,
	createJobModalFormSchema as formSchema,
} from "./create-job-modal-form-schema";

export const CreateJobModalForm = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"form">) => {
	const { isOpen } = useCreateJobModal();
	const queryClient = useQueryClient();
	const [search] = useQueryState("search", parseAsString.withDefault(""));
	const { setIsOpen } = useCreateJobModal();
	const { mutate: mutateApplicationForm } = useMutation(
		mutateApplicationFormMutationOptions(),
	);
	const { mutate: mutateJob } = useMutation(mutateJobMutationOptions());

	const form = useForm<FormSchema>({
		resolver: arktypeResolver(formSchema),
		mode: "onSubmit",
		defaultValues: {
			id: uuidv4(),
			description: "",
			name: "",
			candidatesAmount: 1,
			currency: "IDR",
			mpiFullName: true,
			mpiPhotoProfile: true,
			mpiEmail: true,
			minimumPay: 0,
			maximumPay: 0,
		},
	});

	const onSubmit = (values: FormSchema) => {
		mutateApplicationForm(values, {
			onError: (error) => toast.error(error.message),
		});
		mutateJob(values, {
			onSettled: () =>
				queryClient.invalidateQueries({
					queryKey: getJobsQueryKeys([{ search }]),
				}),
			onError: (error) => toast.error(error.message),
		});

		form.reset();
		setIsOpen(false);
	};

	useEffect(() => {
		form.reset();
	}, [isOpen]);

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
