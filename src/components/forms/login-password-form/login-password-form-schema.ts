import { type } from "arktype";

export const loginPasswordFormSchema = type({
	email: "string.email",
	password: "string",
});
export type LoginPasswordFormSchema = typeof loginPasswordFormSchema.infer;
export const loginPasswordFormId = "login-password-form";
