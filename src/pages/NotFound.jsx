import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='hero h-screen flex flex-col justify-center items-center'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-8xl font-bold mb-8'>
						<p>404 - Page Not Found!</p>
						<Link className='btn btn-primary btn-lg' to='/'>
							<FaHome className='mr-2' />
							Back To Home
						</Link>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
