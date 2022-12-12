import React from 'react';
import { FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className='footer footer-center p-10 bg-primary text-primary-content border-2'>
			<div className='text-center'>
				<FaRocket className='text-5xl mx-auto lg:text-7xl' />
				<p className='font-bold my-4 lg:text-xl lg:my-6'>Made by Me © 2022</p>
			</div>
			<div>
				<div className='grid grid-flow-col gap-10 justify-center'>
					<a>
						<FaGithub className='text-3xl lg:text-4xl' />
					</a>
					<a>
						<FaLinkedin className='text-3xl lg:text-4xl' />
					</a>
					<a>
						<MdEmail className='text-3xl lg:text-4xl' />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
