import { Link } from 'react-router-dom';
import { navLinks } from '../../const/mocks';

export const NavBar = () => {
	return (
		<nav className='bg-[#fff] p-4 nav_elements'>
			<div className=' mx-auto flex justify-between items-center  max-w-[1200px]'>
				<div className='text-black text-[1.5rem] font-bold '>MiSitio</div>
				<div className='space-x-4'>
					{navLinks.map((item) => {
						return (
							<a
								key={item.id}
								href={item.link}
								className='text-black hover:text-[#6347F9] font-bold  px-3 py-2 rounded-md text-sm'>
								{item.name}
							</a>
						);
					})}
				</div>
				<div className='space-x-4'>
					<Link
						to={'/auth/login'}
						className='py-2 px-4 text-[#6347F9] transition-all ease-in-out .5s  
							border border-[#6347F9] hover:bg-[#6347F9] hover:text-white font-medium rounded-md'>
						Login
					</Link>

					<Link
						to={'/auth/register'}
						className='py-2 px-4 text-[#6347F9] transition-all ease-in-out .5s 
							border border-[#6347F9] hover:bg-[#6347F9] hover:text-white  font-medium rounded-md'>
						Register
					</Link>
				</div>
			</div>
		</nav>
	);
};
