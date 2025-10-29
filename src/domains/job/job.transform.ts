import type { CreateJobModalFormSchema } from "-/components/forms/create-job-modal-form/create-job-modal-form-schema";
import { type } from "arktype";
import { v4 as uuidv4 } from "uuid";
import type { JobDto } from "./job.dto";
import { Job, JobApplicationForm } from "./job.type";

export const createFormToJobApplicationForm = (
	value: CreateJobModalFormSchema,
) => {
	const allSections = [
		{ key: "full_name", label: "Nama Lengkap", required: value.mpiFullName },
		{ key: "dob", label: "Tanggal Lahir", required: value.mpiDob },
		{ key: "domicile", label: "Domisili", required: value.mpiDomicile },
		{ key: "email", label: "Email", required: value.mpiEmail },
		{ key: "gender", label: "Jenis Kelamin", required: value.mpiGender },
		{ key: "linkedin", label: "Link LinkedIn", required: value.mpiLinkedin },
		{
			key: "phone_number",
			label: "Nomor Telepon",
			required: value.mpiPhoneNumber,
		},
		{
			key: "photo_profile",
			label: "Foto Profil",
			required: value.mpiPhotoProfile,
		},
	];

	const filteredSections = allSections.filter(
		(section) => section.required !== "off",
	);

	const validated = JobApplicationForm({
		id: uuidv4(),
		jobId: value.id,
		sections: filteredSections,
	});

	if (validated instanceof type.errors) {
		throw new Error(validated.summary);
	}

	return validated;
};

export const createFormToJob = (value: CreateJobModalFormSchema) => {
	const validated = Job({
		id: value.id,
		slug: `${value.name}-${value.id}`,
		title: value.name,
		salary: {
			min: value.minimumPay,
			max: value.maximumPay,
			currency: value.currency,
		},
		startDate: new Date(),
		status: "active",
		type: value.type,
		candidatesAmount: !isNaN(Number(value.candidatesAmount))
			? Number(value.candidatesAmount)
			: 1,
	});

	if (validated instanceof type.errors) {
		throw new Error(validated.summary);
	}

	return validated;
};

export const toJob = (dto: JobDto): Job => {
	const validated = Job({
		id: dto.id,
		slug: dto.slug,
		title: dto.title,
		salary: dto.salary,
		startDate: new Date(dto.startDate),
		status: dto.status,
		type: dto.type,
		candidatesAmount: !isNaN(Number(dto.candidatesAmount))
			? Number(dto.candidatesAmount)
			: 1,
	});

	if (validated instanceof type.errors) {
		throw new Error(validated.summary);
	}

	return validated;
};
