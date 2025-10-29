import { services } from "-/domains/services";
import { type LoaderFunction, redirect } from "react-router";
import { sessionLoader } from "./session-loader";

export const adminJobPageLoader = (async ({ params, ...rest }) => {
	const { session } = await sessionLoader({ params, ...rest });
	const { slug } = params;

	if (!slug) {
		throw redirect(`/${session.role}`);
	}

	const job = await services.job.getJobByIdentifier(slug);

	if (!job) {
		throw redirect(`/${session.role}`);
	}

	const applicationForm = await services.job.getApplicationFormByJobId(
		job.get("id"),
	);

	if (!applicationForm) {
		throw redirect(`/${session.role}`);
	}

	return {
		session,
		job,
		applicationForm,
	};
}) satisfies LoaderFunction;
