import { type } from "arktype";

export const AuthCode = type({
	code: "string.uuid.v4",
	issuedAt: "Date",
	maxAge: "number",
});
export type AuthCode = typeof AuthCode.infer;

export const UserDto = type({
	id: "string.uuid.v4",
	email: "string.email",
	password: "string | undefined",
	role: "'admin' | 'jobseeker'",
	auth_code: AuthCode.or("undefined"),
	full_name: "string | undefined",
	photo_profile: "string.url | undefined",
	gender: "'m' | 'f' | undefined",
	domicile: "string | undefined",
	phone_number: "string | undefined",
	linkedin_link: "string | undefined",
	date_of_birth: "string | undefined",
});
export type UserDto = typeof UserDto.infer;
