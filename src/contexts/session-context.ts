import type { User } from "-/domains/user/user.type";
import { createContext } from "react-router";

export const sessionContext = createContext<User | null>(null);
