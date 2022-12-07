import React from 'react';
import { GiRabbitHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar mb-12 shadow-lg bg-neutral'>
			<div className='container border-2 mx-auto flex items-center justify-between'>
				<div className='flex-none px-2 py-3 mx-2'>
					<GiRabbitHead className='inline pr-2 text-3xl md:text-4xl lg:text-5xl' />
					<Link
						to='/'
						className='text-lg font-bold align-middle md:text-xl lg:text-2xl'
					>
						Sean Yang
					</Link>
				</div>

				<div className='px-2 mx-2'>
					<div className='flex gap-x-3 lg:gap-x-6'>
						<Link
							to='/'
							className='btn btn-ghost btn-sm rounded-btn md:text-lg lg:text-xl'
						>
							Home
						</Link>
						<Link
							to='/'
							className='btn btn-ghost btn-sm rounded-btn md:text-lg lg:text-xl'
						>
							Resume
						</Link>
						<Link
							to='/'
							className='btn btn-ghost btn-sm rounded-btn md:text-lg lg:text-xl'
						>
							Say Hello
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
