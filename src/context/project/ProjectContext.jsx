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
					'Application that allows registered users to post magazine subscriptions to a public dashboard. Also has an account page that is specific to the user and its data',
				githubLink: 'https://github.com/sean-yang14/magazine-subscriptions',
				video: './assets/videos/flask_project.mp4',
			},
			{
				id: 2,
				name: 'Dentist Compensation Form',
				skillset: ['Javascript', 'React', 'CSS', 'JSON Server'],
				description:
					'Form application built to gather compensation statistics from dentists. JSON server acts as the backend, allowing the user to add posts via form submission, edit previous submissions and delete posts',
				githubLink: 'https://github.com/sean-yang14/salary-form',
				websiteLink: null,
				video: './assets/videos/form_project.mp4',
			},
			{
				id: 3,
				name: 'Github User',
				skillset: ['Javascript', 'React', 'Tailwind'],
				description:
					'Application that enables users to search and view Github profiles. Built using the github API',
				githubLink: 'https://github.com/sean-yang14/github-user',
				websiteLink: null,
				video: './assets/videos/github_finder_project.mp4',
			},
			{
				id: 4,
				name: 'Scrub Network',
				skillset: ['React', 'Next.js', 'Tailwind'],
				description:
					'Static website that utilizes a contact form, connected to Formspree. Built for my startup idea of creating a better dental recruiting firm',
				githubLink: null,
				websiteLink: 'https://scrubnetwork.com',
				video: './assets/videos/scrub_network.mp4',
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
