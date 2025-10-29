import { CreateJobModalContext } from "-/domains/job/contexts/create-job-modal-context";
import { useContext } from "react";

export const useCreateJobModal = () => {
	const context = useContext(CreateJobModalContext);
	if (!context) {
		throw new Error(
			"useCreateJobModal must be used within a <CreateJobModalProvider>",
		);
	}
	return context;
};
