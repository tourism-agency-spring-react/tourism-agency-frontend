import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../auth/layouts/AuthLayout';
import { ErrorPage } from '../tourism/pages/ErrorPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { HomePage } from '../tourism/pages/HomePage';
import { HomeLayout } from '../tourism/layouts/HomeLayout';
import { Services } from '../tourism/pages/Services';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <HomeLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />,
			},
			{
				path: '/services',
				element: <Services />,
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
