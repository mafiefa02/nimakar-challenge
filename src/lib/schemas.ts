import { type } from "arktype";

export const AuthCodeSchema = type({
	code: "string.uuid.v4",
	issuedAt: "Date",
	maxAge: "number",
});
export type AuthCodeSchema = typeof AuthCodeSchema.infer;

export const User = type({
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
export type User = typeof User.infer;

export const ListCardSchema = type({
	badge: "'Active' | 'Inactive'",
	started_on_text: "string",
	cta: "string",
});
export type ListCardSchema = typeof ListCardSchema.infer;

export const SalarySchema = type({
	min: "number",
	max: "number",
	currency: "string",
}).narrow((s) => s.min <= s.max);
export type SalarySchema = typeof SalarySchema.infer;

export const JobSchema = type({
	id: /^job_\d{8}_\d{4}$/,
	slug: "string",
	title: "string",
	status: "'active' | 'inactive'",
	startDate: "Date",
	salary: SalarySchema,
	listCard: ListCardSchema,
});
export type JobSchema = typeof JobSchema.infer;
