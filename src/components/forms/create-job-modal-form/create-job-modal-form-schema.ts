import { JobOpening } from "-/domains/job/job.type";
import { type } from "arktype";

export const createJobModalFormSchema = JobOpening.and(
	type({
		minimumPay: type("number").atLeast(0),
		maximumPay: type("number").atLeast(0),
		currency: "string",
	}),
).and(
	type({
		mpiFullName: "string",
		mpiPhotoProfile: "string",
		mpiGender: "string",
		mpiDomicile: "string",
		mpiEmail: "string",
		mpiPhoneNumber: "string",
		mpiLinkedin: "string",
		mpiDob: "string",
	}),
);
export type CreateJobModalFormSchema = typeof createJobModalFormSchema.infer;
export const createJobModalFormId = "create-job-modal-form";
