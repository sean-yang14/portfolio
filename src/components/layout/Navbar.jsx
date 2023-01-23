import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar bg-base-100 container mx-auto pb-3 border-b-2 border-gray-300'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52'
					>
						<li>
							<Link to='/' className='text-base active:bg-orange-600'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/projects' className='text-base active:bg-orange-600'>
								Projects
							</Link>
						</li>
						<li>
							<Link to='/about' className='text-base active:bg-orange-600'>
								About
							</Link>
						</li>
					</ul>
				</div>
				<Link
					to='/'
					className='btn btn-ghost btn-md normal-case text-3xl font-bold'
				>
					<div className='flex items-baseline'>
						Sean{' '}
						<span className='text-5xl text-orange-500 leading-[0] pl-1'>.</span>
					</div>
				</Link>
			</div>

			<div className='navbar-center hidden lg:flex'>
				<ul className='flex px-1'>
					<li className='mr-2'>
						<Link to='/' className='btn btn-ghost text-base font-normal'>
							Home
						</Link>
					</li>
					<li className='mr-2'>
						<Link
							to='/projects'
							className='btn btn-ghost text-base font-normal'
						>
							Projects
						</Link>
					</li>
					<li>
						<Link to='/about' className='btn btn-ghost text-base font-normal'>
							About
						</Link>
					</li>
				</ul>
			</div>

			<div className='navbar-end'>
				<a
					href='https://drive.google.com/file/d/11JJE3yhDG_rVuX4fdiibCeoLem-I2XsJ/view?usp=sharing'
					target='_blank'
					className='btn btn-ghost border-[1.5px] border-black text-base font-normal'
				>
					Resume
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
