import type { UserSchema } from "-/lib/schemas";

type UserInitData = Pick<UserSchema, "email"> &
	Partial<Omit<UserSchema, "email">>;

const userDefaults: Omit<UserSchema, "email"> = {
	role: "jobseeker",
	password: undefined,
	authCode: undefined,
	fullName: undefined,
	photoProfile: undefined,
	gender: undefined,
	domicile: undefined,
	phoneNumber: undefined,
	linkedinLink: undefined,
	dateOfBirth: undefined,
};

export class User {
	private user: UserSchema;

	constructor(initData: UserInitData) {
		this.user = {
			...userDefaults,
			...initData,
		};
	}

	get(): UserSchema;
	get<K extends keyof UserSchema>(key: K): UserSchema[K];
	get<K extends keyof UserSchema>(key?: K): UserSchema | UserSchema[K] {
		if (!key) {
			return {
				...this.user,
			};
		}
		return this.user[key];
	}

	set<K extends keyof UserSchema>(key: K, value: UserSchema[K]) {
		this.user[key] = value;
		return this.user;
	}

	update(newUser: UserSchema) {
		this.user = {
			...newUser,
		};
		return this.user;
	}
}
