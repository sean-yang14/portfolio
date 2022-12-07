import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
	// Need project info
	let myProjects = [];

	return (
		<section>
			<div>
				{myProjects.map((project) => (
					<ProjectItem project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
