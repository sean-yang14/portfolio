import React from 'react';
import { useContext } from 'react';
import ProjectContext from '../context/project/ProjectContext';
import Project from '../components/projects/Project';

function ProjectPage() {
	const { projects } = useContext(ProjectContext);

	return (
		<div className='bg-white container mx-auto'>
			<h1 className='text-center my-8 text-4xl font-bold lg:text-5xl'>
				Projects
			</h1>
			{projects.map((project) => (
				<Project project={project} />
			))}
		</div>
	);
}

export default ProjectPage;
