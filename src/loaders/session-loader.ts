import { sessionContext } from "-/contexts/session-context";
import type { UserSchema } from "-/lib/schemas";
import { User } from "-/models/user";
import { type LoaderFunction } from "react-router";

export const sessionLoader = (async ({ context }) => {
	const session: {
		user: UserSchema;
	} = context.get(sessionContext);
	const user = new User(session.user);
	return {
		user,
	};
}) satisfies LoaderFunction;
