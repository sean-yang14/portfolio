import React from 'react';
import { GiRabbitHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar bg-base-100 container mx-auto'>
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
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link to='/' className='text-lg'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/' className='text-lg'>
								Resume
							</Link>
						</li>
						<li>
							<Link to='/' className='text-lg'>
								Say Hello
							</Link>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost btn-md normal-case text-2xl'>
					Sean Yang
				</Link>
			</div>

			<div className='navbar justify-end hidden lg:flex'>
				<ul className='menu menu-horizontal p-0'>
					<li className='mr-2'>
						<Link to='/' className='btn btn-ghost rounded-md'>
							Home
						</Link>
					</li>
					<li className='mr-2'>
						<Link to='/' className='btn btn-ghost'>
							Say Hello
						</Link>
					</li>
					<li>
						<Link to='/' className='btn btn-primary rounded-md text-white'>
							Resume
						</Link>
					</li>
				</ul>
			</div>

			<div className='navbar-end lg:hidden'>
				<Link to='/' className='btn btn-primary rounded-md'>
					Resume
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
