import { useMutation } from "@tanstack/react-query";
import type { services } from "-/domains/services";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { loginUserMutationOptions } from "../mutations/login-user-mutation";

const storageKey = "session";

export const useAuthenticate = () => {
	const { mutate } = useMutation(loginUserMutationOptions());
	const navigate = useNavigate();

	const login = (...values: Parameters<typeof services.user.loginUser>) => {
		mutate(...values, {
			onSuccess: (user) => {
				toast.success("You're successfully logged in!");
				localStorage.setItem(storageKey, JSON.stringify(user));
				navigate(0);
			},
			onError: (error) => toast.error(error.message),
		});
	};

	const logout = () => {
		localStorage.removeItem(storageKey);
		navigate(0);
	};

	return { login, logout };
};
