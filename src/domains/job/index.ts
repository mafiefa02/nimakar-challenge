import { apiClient } from "-/lib/api";

import { JobApi } from "./job.api";
import { JobService } from "./job.services";

const jobApi = new JobApi("/job", apiClient);
export const jobService = new JobService(jobApi);
