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
		mpiFullName: "boolean | undefined",
		mpiPhotoProfile: "boolean | undefined",
		mpiGender: "boolean | undefined",
		mpiDomicile: "boolean | undefined",
		mpiEmail: "boolean | undefined",
		mpiPhoneNumber: "boolean | undefined",
		mpiLinkedin: "boolean | undefined",
		mpiDob: "boolean | undefined",
	}),
);
export type CreateJobModalFormSchema = typeof createJobModalFormSchema.infer;
export const createJobModalFormId = "create-job-modal-form";
