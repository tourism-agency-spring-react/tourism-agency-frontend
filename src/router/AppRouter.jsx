import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../auth/layouts/AuthLayout';
import { ErrorPage } from '../tourism/pages/ErrorPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <AuthLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '/auth',
		errorElement: <ErrorPage />,
		element: <AuthLayout />,
		children: [
			{
				index: true,
				path: '/auth/login',
				element: <LoginPage />,
			},
			{
				index: true,
				path: '/auth/register',
				element: <RegisterPage />,
			},
		],
	},
]);
