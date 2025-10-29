import { mutationOptions } from "@tanstack/react-query";
import { services } from "-/domains/services";

type LoginUserParams = Parameters<typeof services.user.loginUser>;

export const loginUserMutationKey = () => ["loginUser"];

export const loginUserMutationOptions = () =>
	mutationOptions({
		mutationKey: loginUserMutationKey(),
		mutationFn: async (...params: LoginUserParams) =>
			await services.user.loginUser(...params),
	});
