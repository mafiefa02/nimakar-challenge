import { regex } from "arkregex";
import { type } from "arktype";

export const Job = type({
	id: "string.uuid.v4",
	slug: "string",
	title: "string",
	status: "'active' | 'inactive' | 'draft'",
	startDate: "Date",
	candidatesAmount: type("number.integer").atLeast(1),
	type: "'full-time' | 'contract' | 'part-time' | 'internship' | 'freelance'",
	salary: type({
		min: "number",
		max: "number",
		currency: regex("^[A-Z]{3}$"),
	}).narrow((s) => s.min <= s.max),
});
export type Job = typeof Job.infer;

export const JobApplicationForm = type({
	id: "string.uuid.v4",
	jobId: Job.get("id"),
	sections: type({
		key: "string",
		label: "string",
		required: "string",
	}).array(),
});
export type JobApplicationForm = typeof JobApplicationForm.infer;

export const JobOpening = type({
	id: "string.uuid.v4",
	name: type("string").atLeastLength(1),
	type: type(
		"'full-time' | 'contract' | 'part-time' | 'internship' | 'freelance'",
	),
	description: type("string").atLeastLength(1),
	candidatesAmount: type("number.integer").atLeast(1),
});
export type JobOpening = typeof JobOpening.infer;
