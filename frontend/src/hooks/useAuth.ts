import { useContext } from 'react';
import { AuthContext, AuthenticationProps } from '../context/AuthProvider';

export const useAuth = (): AuthenticationProps => {
	return useContext(AuthContext);
};
