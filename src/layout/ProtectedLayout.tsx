import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const ProtectedLayout = (children: JSX.Element) => {
	const { email } = useAuth();

	if (!email) {
		return <h1>Você não tem permissão para acessar essa página.</h1>;
	}

	return children;
};
