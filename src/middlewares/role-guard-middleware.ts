import { sessionContext } from "-/contexts/session-context";
import type { MiddlewareFunction } from "react-router";
import { redirect } from "react-router";

export const roleGuardMiddleware: MiddlewareFunction = async (
	{ request, context },
	next,
) => {
	const session = context.get(sessionContext);

	if (!session) throw redirect("/auth/register");

	const { pathname } = new URL(request.url);
	const intendedPath = `/${session.get("role")}`;

	if (!pathname.startsWith(intendedPath)) {
		throw redirect(intendedPath);
	}

	await next();
};
