import { type } from "arktype";

export const AuthCodeSchema = type({
	code: "string.uuid.v4",
	issuedAt: "Date",
	maxAge: "number",
});
export type AuthCodeSchema = typeof AuthCodeSchema.infer;

export const UserSchema = type({
	email: "string.email",
	password: "string | undefined",
	role: type("'admin' | 'jobseeker'").default("jobseeker"),
	authCode: "'AuthCode' | undefined",
	fullName: "string | undefined",
	photoProfile: "string.url | undefined",
	gender: "'m' | 'f' | undefined",
	domicile: "string | undefined",
	phoneNumber: "string | undefined",
	linkedinLink: "string | undefined",
	dateOfBirth: "Date | undefined",
});
export type UserSchema = typeof UserSchema.infer;
