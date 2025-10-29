import { mutationOptions } from "@tanstack/react-query";
import { services } from "-/domains/services";

type mutateApplicationFormParams = Parameters<
	typeof services.job.mutateApplicationForm
>;

export const mutateApplicationFormMutationKey = () => ["mutateApplicationForm"];

export const mutateApplicationFormMutationOptions = () =>
	mutationOptions({
		mutationKey: mutateApplicationFormMutationKey(),
		mutationFn: async (...params: mutateApplicationFormParams) =>
			await services.job.mutateApplicationForm(...params),
	});
