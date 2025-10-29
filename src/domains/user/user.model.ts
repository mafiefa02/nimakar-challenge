import type { User } from "./user.type";

const GENDER_DISPLAY_MAP: Record<string, string> = {
	m: "Laki-laki",
	f: "Perempuan",
};

export class UserModel {
	private user: User;

	constructor(user: User) {
		this.user = {
			...user,
		};
	}

	get data(): User {
		return {
			...this.user,
		};
	}

	public set<K extends keyof User>(key: K, value: User[K]): User {
		this.user[key] = value;
		return {
			...this.user,
		};
	}

	public update(data: Partial<User>): User {
		this.user = {
			...this.user,
			...data,
		};
		return {
			...this.user,
		};
	}

	get genderDisplay(): string {
		if (this.user.meta.gender && GENDER_DISPLAY_MAP[this.user.meta.gender]) {
			return GENDER_DISPLAY_MAP[this.user.meta.gender];
		}

		return "Belum diatur";
	}
}
