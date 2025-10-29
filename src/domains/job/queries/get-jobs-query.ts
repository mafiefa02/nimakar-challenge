import { queryOptions } from "@tanstack/react-query";
import { services } from "-/domains/services";

type GetJobsParams = Parameters<typeof services.job.getJobs>;

export const getJobsQueryKeys = (params: GetJobsParams) => ["jobs", ...params];

export const getJobsQueryOptions = (params: GetJobsParams) =>
	queryOptions({
		queryKey: getJobsQueryKeys(params),
		queryFn: async () => await services.job.getJobs(...params),
	});
