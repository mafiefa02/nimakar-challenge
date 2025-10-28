import { type } from "arktype";

export const AuthCode = type({
	code: "string.uuid.v4",
	issuedAt: "Date",
	maxAge: "number",
});

export const User = type({
	email: "string.email",
	password: "string",
	authCode: AuthCode,
	fullName: "string | null",
	photoProfile: "string.url | null",
	gender: "'m' | 'f' | null",
	domicile: "string | null",
	phoneNumber: "string | null",
	linkedinLink: "string | null",
	dateOfBirth: "Date | null",
});
