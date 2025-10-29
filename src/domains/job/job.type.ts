import { regex } from "arkregex";
import { type } from "arktype";

export const Job = type({
	id: regex("^job_\\d{8}_\\d+"),
	slug: "string",
	title: "string",
	status: "'active' | 'inactive' | 'draft'",
	startDate: "Date",
	salary: type({
		min: "number",
		max: "number",
		currency: regex("^[A-Z]{3}$"),
	}).narrow((s) => s.min <= s.max),
});
export type Job = typeof Job.infer;

export const JobOpening = type({
	name: type("string").atLeastLength(1),
	type: type(
		"'full-time' | 'contract' | 'part-time' | 'internship' | 'freelance'",
	),
	description: "string",
	numOfCandidatesNeeded: type("number").atLeast(1),
});
export type JobOpening = typeof JobOpening.infer;
