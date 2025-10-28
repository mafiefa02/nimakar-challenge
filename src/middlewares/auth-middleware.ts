import { sessionContext } from "-/contexts/session-context";
import type { MiddlewareFunction } from "react-router";
import { redirect } from "react-router";

export const authMiddleware: MiddlewareFunction = async ({ context }) => {
	const user = null;
	if (!user) throw redirect("/auth/register");
	context.set(sessionContext, user);
};
