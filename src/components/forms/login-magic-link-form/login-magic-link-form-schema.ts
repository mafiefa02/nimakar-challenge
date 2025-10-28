import { type } from "arktype";

export const loginMagicLinkFormSchema = type({
	email: type("string.email").configure({
		message: (ctx) => `Alamat email ${ctx.actual} tidak valid`,
	}),
});
export type LoginMagicLinkFormSchema = typeof loginMagicLinkFormSchema.infer;
export const loginMagicLinkFormId = "login-magic-link-form";
