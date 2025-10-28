import { type } from "arktype";

export const registerAccountFormSchema = type({
	email: "string.email",
});
export type RegisterAccountFormSchema = typeof registerAccountFormSchema.infer;
export const registerAccountFormId = "register-account-form";
