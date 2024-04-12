import { IUser } from "@/types/user";
import { createContext } from "react";

const GlobalContext = createContext({
	user: null as IUser | null,
	setUser: (_: Partial<IUser> | null) => {},
	isAuth: false as boolean,
	setIsAuth: (_: boolean) => {},
	isAuthenticating: false as boolean,
	setIsAuthenticating: (_: boolean) => {},
});

export default GlobalContext;
