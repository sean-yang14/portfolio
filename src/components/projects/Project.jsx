import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Project({ project }) {
	return (
		<div className='h-[75vh] grid grid-cols-1 grid-rows-2 border-slate-200 border-[1px] rounded-lg shadow-xl mt-8 lg:grid-cols-2 lg:grid-rows-1'>
			<div className='rounded-t-lg bg-green-800 lg:rounded-t-none lg:rounded-l-lg'>
				{/* video */}
			</div>
			<div className='mx-auto mt-8'>
				<h1 className='text-3xl font-bold text-center'>{project.name}</h1>
				<div className='flex justify-center items-center gap-x-4 mt-4'>
					{project.skillset.map((skill) => (
						<div className='rounded-full bg-[#5562FF] text-white font-medium py-2 px-4'>
							{skill}
						</div>
					))}
				</div>
				<h2 className='text-lg font-bold mt-8'>Description</h2>
				<p className='mt-4'>{project.description}</p>
				{project.process && (
					<>
						<h2 className='text-lg font-bold mt-8'>Description</h2>
						<p className='mt-4'>{project.description}</p>
					</>
				)}
				<div className='mt-8'>
					<a href={project.githubLink} target='_blank'>
						<FaGithub className='text-5xl cursor-pointer hover:fill-orange-600' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
