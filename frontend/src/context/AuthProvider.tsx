import { createContext, useState } from 'react';
import { User } from '../constants/constants';
import axios from 'axios';
import { BACKEND_AUTH_API_URL } from '../constants/constants';

export type AuthenticationProps = {
	user: User | null;
	login: (username: string, password: string) => Promise<true | unknown>;
	isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthenticationProps);

type AuthenticationProviderProps = {
	children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthenticationProviderProps) => {
	const [user, setUser] = useState<User>({});
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const login = async (username: string, password: string) => {
		try {
			const response = await axios.post(
				`${BACKEND_AUTH_API_URL}/authenticate`,
				{ username, password }
			);
			console.log(response.data);
			setUser(response?.data);
			setIsAuthenticated(true);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login }}>
			{children}
		</AuthContext.Provider>
	);
};
