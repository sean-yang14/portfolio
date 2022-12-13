import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Hero() {
	return (
		<div className='h-screen bg-white container mx-auto grid grid-cols-1 grid-rows-5'>
			{/* Intro */}
			<div className='flex flex-col items-center justify-center row-start-1 row-span-3'>
				<div className='w-fit'>
					<div className='flex items-center'>
						<h1 className='text-5xl font-bold'>Hi! I Am </h1>
						<div className='rounded-full bg-[#5562FF] text-white text-lg font-medium py-2 px-4 ml-10'>
							Fullstack Dev
						</div>
					</div>
					<h1 className='text-5xl font-bold'>Sean Yang</h1>
					<p className='py-4 w-[35ch] text-lg'>
						I'm a full-stack developer that loves building solutions to
						meaningful human problems
					</p>
					<div className='flex mt-4 gap-x-2'>
						<Link
							to='/'
							className='btn btn-ghost bg-orange-600 px-8 text-white text-lg hover:bg-orange-700'
						>
							Hire Me
						</Link>
						<Link to='/' className='btn btn-ghost px-8 text-lg'>
							Projects
						</Link>
					</div>
					<div className='mt-8'>
						<h2 className='text-2xl font-bold'>Contact</h2>
						<p className='text-lg'>seanhyang1@gmail.com</p>
					</div>
				</div>
			</div>

			{/* companies */}
			<div className='row-span-1 max-h-full border-t-[1px] border-black h-full flex flex-col justify-center bg-base-200'>
				<h3 className='text-sm font-normal text-center mb-2'>
					{/* Companies I'm Proud to Have Worked At */}
					COMPANIES I AM PROUD TO HAVE WORKED AT
				</h3>
				<div className='flex justify-center gap-x-8'>
					<div className='w-40 h-20'>
						<img
							src='./src/components/layout/assets/uhg-logo.png'
							alt='quartet health logo'
							className='h-full w-full object-contain'
						/>
					</div>
					<img
						src='./src/components/layout/assets/ey-logo.svg'
						alt='ey-logo'
						className='w-20 h-20'
					/>
					<div className='w-40 h-20'>
						<img
							src='./src/components/layout/assets/quartet.png'
							alt='quartet health logo'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>

			{/* statistics */}
			<div className='row-start-5 row-span-1 bg-zinc-800 text-white'>
				<div className='flex h-full gap-x-10 items-center justify-center'>
					{/* lefthand side - title and links */}
					<div>
						<h3 className='text-lg font-semibold'>Developer Statistics</h3>
						<div className='grid grid-flow-col gap-4 justify-center mt-4'>
							<a target='_blank' href='https://www.espn.com'>
								<FaGithub className='text-3xl lg:text-4xl cursor-pointer hover:fill-orange-600' />
							</a>
							<a target='_blank'>
								<FaLinkedin className='text-3xl lg:text-4xl cursor-pointer hover:fill-orange-600' />
							</a>
							<a target='_blank'>
								<MdEmail className='text-3xl lg:text-4xl cursor-pointer hover:fill-orange-600' />
							</a>
						</div>
					</div>
					{/* stats section */}
					<div className='w-48'>
						<div className='flex border-b-[1px] border-gray-400 justify-between pb-1'>
							<p>Languages</p>
							<p>4</p>
						</div>
						<div className='flex border-b-[1px] border-gray-400 justify-between pb-1 mt-2'>
							<p>Dev Tools</p>
							<p>5</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
