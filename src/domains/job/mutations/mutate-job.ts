import { mutationOptions } from "@tanstack/react-query";
import { services } from "-/domains/services";

type MutateJobParams = Parameters<typeof services.job.mutateJob>;

export const mutateJobMutationKey = () => ["mutateJob"];

export const mutateJobMutationOptions = () =>
	mutationOptions({
		mutationKey: mutateJobMutationKey(),
		mutationFn: async (...params: MutateJobParams) =>
			await services.job.mutateJob(...params),
	});
