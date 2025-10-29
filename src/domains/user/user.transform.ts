import { type } from "arktype";
import type { UserDto } from "./user.dto";
import { User } from "./user.type";

export const toUser = (dto: UserDto): User => {
	const validated = User({
		id: dto.id,
		email: dto.email,
		role: dto.role,
		meta: {
			fullName: dto.full_name,
			photoProfile: dto.photo_profile,
			gender: dto.gender,
			domicile: dto.domicile,
			phoneNumber: dto.phone_number,
			linkedinLink: dto.linkedin_link,
			dateOfBirth: dto.date_of_birth ? new Date(dto.date_of_birth) : undefined,
		},
	});

	if (validated instanceof type.errors) {
		throw new Error(validated.summary);
	}

	return validated;
};
