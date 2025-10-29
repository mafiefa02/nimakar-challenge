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
		const user = await this.api.getUserByIdentifier(...args);
		return new UserModel(user);
	};
}
