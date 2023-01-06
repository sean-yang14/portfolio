import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Hero() {
	const footerYear = new Date().getFullYear();

	return (
		<div className='h-[90vh] min-h-fit bg-white container mx-auto grid grid-cols-1 grid-rows-6 lg:grid-cols-7'>
			{/* ______Intro________________________ */}
			<div className='flex flex-col items-center justify-center row-start-1 row-span-5 px-4 lg:px-0 lg:row-span-6 lg:col-span-4'>
				<div className='w-fit'>
					<div className='flex items-center'>
						<h1 className='text-4xl font-bold lg:text-5xl'>Hi! I Am </h1>
						<div className='rounded-full bg-[#5562FF] text-white text-lg font-medium py-2 px-4 ml-10'>
							Fullstack Dev
						</div>
					</div>
					<h1 className='text-4xl font-bold lg:text-5xl'>Sean Yang</h1>
					<p className='py-4 w-[35ch] text-base lg:w-[45ch]'>
						I'm a full-stack developer that loves building solutions to
						meaningful human problems
					</p>
					<div className='flex mt-2 gap-x-2'>
						<a
							target='_blank'
							href='mailto:seanhyang1@gmail.com?subject=We%20Want%20to%20Hire%20You'
							className='btn btn-ghost bg-orange-600 px-6 text-white text-base hover:bg-orange-700'
						>
							Hire Me
						</a>
						<Link to='/projects' className='btn btn-ghost px-6 text-base'>
							Projects
						</Link>
					</div>
					<div className='mt-8 lg:mt-6'>
						<h2 className='font-bold text-lg'>Contact</h2>
						<p className='text-base lg:mt-2'>seanhyang1@gmail.com</p>
					</div>
					<div className='mt-4'>
						<h2 className='text-lg font-bold'>Comany History</h2>
						<div className='flex justify-center gap-x-8  mt-[-1rem] md:gap-x-6 lg:gap-x-16 lg:pr-6'>
							<div className='w-40 h-20'>
								<img
									src='./assets/uhg-logo.png'
									alt='quartet health logo'
									className='h-full w-full object-contain'
								/>
							</div>
							<img src='./assets/ey-logo.svg' alt='ey-logo' className='w-20 h-12' />
							<div className='w-28 h-20'>
								<img
									src='./assets/quartet.png'
									alt='quartet health logo'
									className='h-full w-full object-cover'
								/>
							</div>
						</div>
						<div className='mt-[-0.5rem]'>
							<h2 className='text-lg font-bold'>Developer Skill Highlights</h2>
							<div className='grid grid-flow-col gap-4 justify-start mt-4 lg:gap-x-16'>
								<img
									src='./assets/javascript.svg'
									alt='javascript icon'
									className='h-10'
								/>
								<img src='./assets/react.svg' alt='react icon' className='h-10' />
								<img src='./assets/python.svg' alt='python icon' className='h-10' />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ______Profile Pic_____________________ */}
			<div className='hidden lg:pt-8 lg:block lg:visible lg:row-span-5 lg:col-span-3'>
				<img
					src='./assets/profile.png'
					alt='profile pic'
					className='h-full w-full object-cover'
				/>
			</div>

			{/* ______Connect_______________________*/}
			<div className='row-span-1 bg-zinc-800 lg:col-start-5 lg:col-span-3 flex flex-col items-center justify-center text-white'>
				<div className='grid grid-flow-col gap-x-16 justify-center mt-2'>
					<a target='_blank' href='https://github.com/sean-yang14'>
						<FaGithub className='text-4xl cursor-pointer hover:fill-orange-600' />
					</a>
					<a target='_blank' href='https://www.linkedin.com/in/seanhyang/'>
						<FaLinkedin className='text-4xl cursor-pointer hover:fill-orange-600' />
					</a>
					<a
						target='_blank'
						href="mailto:seanhyang1@gmail.com?subject=Let's%20connect"
					>
						<MdEmail className='text-4xl cursor-pointer hover:fill-orange-600' />
					</a>
				</div>
				<p className='mt-4'>Handcrafted by Me &copy; {footerYear} </p>
			</div>
		</div>
	);
}

export default Hero;
