import type { UserApi } from "./user.api";
import { UserModel } from "./user.model";

export class UserService {
	private api: UserApi;

	constructor(api: UserApi) {
		this.api = api;
	}

	public getUserByIdentifier = async (
		...args: Parameters<UserApi["getUserByIdentifier"]>
	) => {
		try {
			const user = await this.api.getUserByIdentifier(...args);
			return user ? new UserModel(user) : null;
		} catch (e) {
			const error = e as Error;
			throw new Error(error.message);
		}
	};

	public loginUser = async (...args: Parameters<UserApi["loginUser"]>) => {
		try {
			const user = await this.api.loginUser(...args);
			return user;
		} catch (e) {
			const error = e as Error;
			throw new Error(error.message);
		}
	};
}
