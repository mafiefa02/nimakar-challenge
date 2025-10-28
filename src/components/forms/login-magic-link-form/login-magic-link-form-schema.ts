import { type } from "arktype";

export const loginMagicLinkFormSchema = type({
	email: "string.email",
});
export type LoginMagicLinkFormSchema = typeof loginMagicLinkFormSchema.infer;
export const loginMagicLinkFormId = "login-magic-link-form";
