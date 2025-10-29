import { type } from "arktype";
import type { AxiosInstance } from "axios";
import { UserDto } from "./user.dto";
import { toUser } from "./user.transform";
import type { User } from "./user.type";

const defaultUser: User = {
	id: "id",
	email: "email@email.com",
	role: "admin",
	meta: {
		dateOfBirth: undefined,
		domicile: undefined,
		fullName: undefined,
		gender: undefined,
		linkedinLink: undefined,
		phoneNumber: undefined,
		photoProfile: undefined,
	},
};

export class UserApi {
	private endpoint: string;
	private client: AxiosInstance;

	constructor(endpoint: string, client: AxiosInstance) {
		this.endpoint = endpoint;
		this.client = client;
	}

	public getUserByIdentifier = async (
		identifier: User["email"] | User["id"],
	): Promise<User> => {
		try {
			const response = await this.client.get(this.endpoint, {
				params: identifier,
			});
			const validated = UserDto(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			return toUser(validated);
		} catch {
			return defaultUser;
		}
	};
}
