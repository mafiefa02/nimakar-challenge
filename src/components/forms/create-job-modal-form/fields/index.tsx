import type { CreateJobModalFormSchema } from "../create-job-modal-form-schema";
import { CreateJobModalFormCandidateAmountField } from "./create-job-modal-form-candidate-amount-field";
import { CreateJobModalFormDescriptionField } from "./create-job-modal-form-description-field";
import { CreateJobModalFormDobField } from "./create-job-modal-form-dob-field";
import { CreateJobModalFormDomicileField } from "./create-job-modal-form-domicile-field";
import { CreateJobModalFormEmailField } from "./create-job-modal-form-email-field";
import { CreateJobModalFormFullNameField } from "./create-job-modal-form-full-name-field";
import { CreateJobModalFormGenderField } from "./create-job-modal-form-gender-field";
import { CreateJobModalFormLinkedinField } from "./create-job-modal-form-linkedin-field";
import { CreateJobModalFormMaximumPayField } from "./create-job-modal-form-maximum-pay-field";
import { CreateJobModalFormMinimumPayField } from "./create-job-modal-form-minimum-pay-field";
import { CreateJobModalFormNameField } from "./create-job-modal-form-name-field";
import { CreateJobModalFormPhoneNumberField } from "./create-job-modal-form-phone-number-field";
import { CreateJobModalFormPhotoProfileField } from "./create-job-modal-form-photo-profile-field";
import { CreateJobModalFormTypeField } from "./create-job-modal-form-type-field";

export const createJobModalFormFields: Partial<
	Record<keyof CreateJobModalFormSchema, React.ReactNode>
> = {
	candidatesAmount: <CreateJobModalFormCandidateAmountField />,
	description: <CreateJobModalFormDescriptionField />,
	maximumPay: <CreateJobModalFormMaximumPayField />,
	minimumPay: <CreateJobModalFormMinimumPayField />,
	mpiDob: <CreateJobModalFormDobField />,
	mpiDomicile: <CreateJobModalFormDomicileField />,
	mpiEmail: <CreateJobModalFormEmailField />,
	mpiFullName: <CreateJobModalFormFullNameField />,
	mpiGender: <CreateJobModalFormGenderField />,
	mpiLinkedin: <CreateJobModalFormLinkedinField />,
	mpiPhoneNumber: <CreateJobModalFormPhoneNumberField />,
	mpiPhotoProfile: <CreateJobModalFormPhotoProfileField />,
	name: <CreateJobModalFormNameField />,
	type: <CreateJobModalFormTypeField />,
};
