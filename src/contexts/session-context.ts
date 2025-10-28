import { User } from "-/lib/types";
import { createContext } from "react-router";

export const sessionContext = createContext<typeof User.infer | null>(null);
