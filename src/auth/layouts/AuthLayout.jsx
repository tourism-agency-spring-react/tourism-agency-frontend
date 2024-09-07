import { Outlet } from 'react-router-dom';


export const AuthLayout = () => {
	return (
		<main
			className='flex items-center justify-center min-h-screen'
			style={{ backgroundColor: '#EFEFEF' }}>
			<section className='container mx-auto my-8 rounded-lg shadow-md w-full min-h-screen'>
				<div className='grid grid-cols-1 md:grid-cols-3 w-full h-full'>

					<Outlet /> {/* Children */}

					<div className='md:col-span-2 flex items-center justify-center'>
						<img
							src='/Frame14.png'
							alt='Frame 14'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</section>
		</main>
	);
};
