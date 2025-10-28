import { type } from "arktype";

export const registerAccountFormSchema = type({
	email: type("string.email").configure({
		message: (ctx) => `Alamat email ${ctx.actual} tidak valid`,
	}),
});
export type RegisterAccountFormSchema = typeof registerAccountFormSchema.infer;
export const registerAccountFormId = "register-account-form";
