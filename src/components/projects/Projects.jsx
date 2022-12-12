import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
	// Need project info
	let myProjects = [
		{
			id: 1,
			name: 'Project 1',
			imageLink:
				'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
			skill: ['Python', 'Flask', 'Tailwind'],
			description:
				'Search usernames from Github and view data on their profile',
			githubLink: 'link',
		},
		{
			id: 2,
			name: 'Project 2',
			imageLink:
				'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
			skill: ['Python', 'Flask', 'Tailwind'],
			description:
				'Search usernames from Github and view data on their profile',
			githubLink: 'link',
		},
		{
			id: 3,
			name: 'Project 3',
			imageLink:
				'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
			skill: ['Python', 'Flask', 'Tailwind'],
			description:
				'Search usernames from Github and view data on their profile',
			githubLink: 'link',
		},
		{
			id: 4,
			name: 'Project 4',
			imageLink:
				'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
			skill: ['Python', 'Flask', 'Tailwind'],
			description:
				'Search usernames from Github and view data on their profile',
			githubLink: 'link',
		},
		{
			id: 5,
			name: 'Project 5',
			imageLink:
				'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
			skill: ['Python', 'Flask', 'Tailwind'],
			description:
				'Search usernames from Github and view data on their profile',
			githubLink: 'link',
		},
	];

	return (
		<section>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6'>
				{myProjects.map((project) => (
					<ProjectItem key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
