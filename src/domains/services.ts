import { apiClient } from "-/lib/api";
import { JobApi } from "./job/job.api";
import { JobService } from "./job/job.services";
import { UserApi } from "./user/user.api";
import { UserService } from "./user/user.services";

const userApi = new UserApi("/user", apiClient);
const userService = new UserService(userApi);

const jobApi = new JobApi("/job", apiClient);
const jobService = new JobService(jobApi);

export const services = {
	user: userService,
	job: jobService,
};
