import { type } from "arktype";
import type { AxiosInstance } from "axios";
import { isAxiosError } from "axios";
import { UserDto } from "./user.dto";
import { toUser } from "./user.transform";
import type { User } from "./user.type";

const defaultUser: UserDto = {
	id: "33aa495d-d633-4229-b080-efc89b0bbe8f",
	email: "email@email.com",
	password: "password",
	role: "admin",
	date_of_birth: undefined,
	domicile: undefined,
	full_name: undefined,
	gender: undefined,
	linkedin_link: undefined,
	phone_number: undefined,
	photo_profile: undefined,
	auth_code: undefined,
};

export class UserApi {
	private endpoint: string;
	private client: AxiosInstance;

	constructor(endpoint: string, client: AxiosInstance) {
		this.endpoint = endpoint;
		this.client = client;
	}

	public loginUser = async ({
		email,
		password,
	}: {
		email: UserDto["email"];
		password: UserDto["password"];
	}): Promise<User> => {
		try {
			if (email !== defaultUser.email || password !== defaultUser.password) {
				throw new Error("Wrong credentials");
			}

			const response = await this.client
				.post(`${this.endpoint}/login`, {
					email,
					password,
				})
				// TODO: remove this when backend is implemented
				.catch(() => ({ data: defaultUser }));

			const validated = UserDto(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			return toUser(validated);
		} catch (error) {
			if (isAxiosError(error)) {
				if (error.response?.status === 401 || error.response?.status === 403) {
					throw new Error("Wrong credentials");
				}
			}
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("An unknown error occured");
		}
	};

	public getUserByIdentifier = async (
		identifier: UserDto["email"] | UserDto["id"],
	): Promise<User | null> => {
		try {
			const response = await this.client
				.get(this.endpoint, {
					params: { identifier },
				})
				.catch((error) => {
					if (isAxiosError(error) && error.response?.status === 404) {
						return { data: null };
					}
					throw error;
				})
				// TODO: remove this when backend is implemented
				.catch(() => ({ data: defaultUser }));

			if (response.data === null) {
				return null;
			}

			const validated = UserDto(response.data);

			if (validated instanceof type.errors) {
				throw new Error(validated.summary);
			}

			return toUser(validated);
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("An unknown error occured");
		}
	};
}
