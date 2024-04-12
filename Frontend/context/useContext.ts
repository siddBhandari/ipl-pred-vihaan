import { IUser } from "@/types/user";
import { useState } from "react";

const useContextData = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const handleUser = (data: Partial<IUser> | null) => {
		setUser(() => data as IUser | null);
	};

	const [isAuth, setIsAuth] = useState(false);
	const handleIsAuth = (data: boolean) => {
		setIsAuth(() => data);
	};

	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const handleIsAuthenticating = (data: boolean) => {
		setIsAuthenticating(() => data);
	};

	return {
		user,
		setUser: handleUser,
		isAuth,
		setIsAuth: handleIsAuth,
		isAuthenticating,
		setIsAuthenticating: handleIsAuthenticating,
	};
};

export default useContextData;
