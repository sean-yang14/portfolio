import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectContext from '../context/project/ProjectContext';

function ProjectPage({ project }) {
	const { projects } = useContext(ProjectContext);
	const params = useParams();

	return (
		<>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link to='/' className='btn btn-ghost'>
						Back to Home
					</Link>
				</div>

				<div>
					<h1>{project.name} Walkthrough</h1>
					<figure>{/* video */}</figure>
					<p>{project.description}</p>
					<div>
						{/* icon */}
						<a href={project.githubLink} target='_blank'>
							Github Link
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectPage;
