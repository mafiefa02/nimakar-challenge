import type { User } from "-/models/user";
import { createContext } from "react-router";

export const sessionContext = createContext<User | null>(null);
