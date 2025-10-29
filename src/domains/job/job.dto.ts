import { regex } from "arkregex";
import { type } from "arktype";

export const JobDto = type({
	id: regex("^job_\\d{8}_\\d+"),
	slug: "string",
	title: "string",
	status: "'active' | 'inactive'",
	startDate: "string",
	type: "string",
	candidatesAmount: "string",
	salary: type({
		min: "number",
		max: "number",
		currency: "string",
	}).narrow((s) => s.min <= s.max),
});
export type JobDto = typeof JobDto.infer;
