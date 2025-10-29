import { sessionContext } from "-/contexts/session-context";
import { type LoaderFunction } from "react-router";

export const sessionLoader = (async ({ context }) => {
	const session = context.get(sessionContext);
	return {
		session,
	};
}) satisfies LoaderFunction;
