import { apiClient } from "-/lib/api";

import { UserApi } from "./user.api";
import { UserService } from "./user.services";

const userApi = new UserApi("/user", apiClient);
export const userService = new UserService(userApi);
