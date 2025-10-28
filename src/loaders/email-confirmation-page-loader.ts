import type { LoaderFunction } from "react-router";
import { redirect } from "react-router";

export const emailConfirmationPageLoader = (async ({ request }) => {
	const { searchParams } = new URL(request.url);
	const email = searchParams.get("email");

	if (!email) throw redirect("/auth/register");

	return {
		email,
	};
}) satisfies LoaderFunction;
