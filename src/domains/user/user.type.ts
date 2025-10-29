import { type } from "arktype";

export const UserMeta = type({
	fullName: "string | undefined",
	photoProfile: "string.url | undefined",
	gender: "'m' | 'f' | undefined",
	domicile: "string | undefined",
	phoneNumber: "string | undefined",
	linkedinLink: "string | undefined",
	dateOfBirth: "Date | undefined",
});
export type UserMeta = typeof UserMeta.infer;

export const User = type({
	id: "string.uuid.v4",
	email: "string.email",
	role: type("'admin' | 'jobseeker'").or("undefined").default("jobseeker"),
	meta: UserMeta,
});
export type User = typeof User.infer;
