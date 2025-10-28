import { sessionContext } from "-/contexts/session-context";
import type { MiddlewareFunction } from "react-router";
import { redirect } from "react-router";

export const authMiddleware: MiddlewareFunction = async (
	{ request, context },
	next,
) => {
	const session = context.get(sessionContext);
	const { pathname } = new URL(request.url);
	const isAuthPage = pathname.startsWith("/auth");

	if (!session && !isAuthPage) {
		throw redirect("/auth/register");
	}

	if (session && isAuthPage) {
		throw redirect(`/${session.get("role")}`);
	}

	await next();
};
