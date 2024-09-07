import { NavBar } from '../../components/shared/NavBar';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	);
};
