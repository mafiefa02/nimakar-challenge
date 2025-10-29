import { createContext } from "react";

type CreateJobModalState = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateJobModalContext = createContext<CreateJobModalState | null>(
	null,
);
