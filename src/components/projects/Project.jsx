import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Project({ project }) {
	return (
		<div className='grid grid-cols-1 grid-rows-2 border-slate-200 border-[1px] rounded-lg shadow-xl mt-8 lg:h-[50vh] lg:min-h-fit lg:grid-cols-2 lg:grid-rows-1'>
			<div className='rounded-t-lg bg-stone-300 lg:rounded-t-none lg:rounded-l-lg'>
				<video className='h-full w-full' controls>
					<source src={project.video} type='video/mp4' />
					Your browser does not support the video tag
				</video>
			</div>
			<div className='mx-auto mt-8 lg:mt-12 overflow-auto lg:pr-4'>
				<h1 className='text-2xl font-bold text-center lg:text-3xl'>
					{project.name}
				</h1>
				<div className='flex flex-wrap gap-y-2 justify-center items-center gap-x-4 mt-4 lg:mt-6'>
					{project.skillset.map((skill) => (
						<div className='rounded-full bg-[#5562FF] text-white font-medium py-2 px-4'>
							{skill}
						</div>
					))}
				</div>
				<a href={project.githubLink} target='_blank'>
					<FaGithub className='text-4xl cursor-pointer hover:fill-orange-600 mx-auto my-4' />
				</a>
				<h2 className='text-lg font-bold mt-8 text-center lg:text-xl'>
					Description
				</h2>
				<p className='mt-4 mb-8 text-center px-4 lg:w-[45ch] lg text-lg'>
					{project.description}
				</p>
			</div>
		</div>
	);
}

export default Project;
