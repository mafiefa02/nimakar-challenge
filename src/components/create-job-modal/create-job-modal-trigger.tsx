import { useCreateJobModal } from "-/domains/job/hooks/use-create-job-modal";
import { Button, type ButtonProps } from "../shadcn/button";

export const CreateJobModalTrigger = ({ onClick, ...props }: ButtonProps) => {
	const { setIsOpen } = useCreateJobModal();
	return (
		<Button
			onClick={() => setIsOpen(true)}
			{...props}
		/>
	);
};
