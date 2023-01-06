import React from 'react';
import { createContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const state = {
		projects: [
			{
				id: 1,
				name: 'Magazine Subscriptions Dashboard',
				skillset: ['Python', 'Flask', 'MySQL', 'Tailwind'],
				description:
					'Application that allows registed users to post magazine subscriptions to a public dashboard. Also has an account page that is specific to the user and its data',
				githubLink: 'https://github.com/sean-yang14/magazine-subscriptions',
				video: './src/components/layout/assets/videos/flask_project.mp4',
			},
			{
				id: 2,
				name: 'Dentist Compensation Form',
				skillset: ['Javascript', 'React', 'CSS', 'JSON Server'],
				description:
					'Form application built to gather compensation statistics from dentists. JSON server acts as the backend, allowing the user to add posts via form submission, edit previous submissions and delete posts',
				githubLink: 'https://github.com/sean-yang14/salary-form',
				video: './src/components/layout/assets/videos/form_project.mp4',
			},
			{
				id: 3,
				name: 'Github User',
				skillset: ['Javascript', 'React', 'Tailwind'],
				description:
					'Application enabling users to search and view Github profiles. Built using the github API',
				githubLink: 'https://github.com/sean-yang14/github-user',
				video:
					'./src/components/layout/assets/videos/github_finder_project.mp4',
			},
		],
	};

	return (
		<ProjectContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
export default ProjectContext;
