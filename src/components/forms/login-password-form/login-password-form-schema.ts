import { type } from "arktype";

export const loginPasswordFormSchema = type({
	email: type("string.email").configure({
		message: (ctx) => `Alamat email ${ctx.actual} tidak valid`,
	}),
	password: type.string.atLeastLength(1).configure({
		message: () => `Kata sandi tidak boleh kosong`,
	}),
});
export type LoginPasswordFormSchema = typeof loginPasswordFormSchema.infer;
export const loginPasswordFormId = "login-password-form";
