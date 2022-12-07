import React from 'react';
import { createContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const state = {
		projects: [
			{
				id: 1,
				name: 'Project 1',
				imageLink:
					'../../components/layout/assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg',
				skillset: ['Python', 'Flask', 'Tailwind'],
				description:
					'Search usernames from Github and view data on their profile',
				githubLink: 'link',
			},
			{
				id: 2,
				name: 'Project 2',
				imageLink:
					'../../components/layout/assets/hal-gatewood-weRQAu9TA-A-unsplash.jpg',
				skillset: ['Javascript', 'React', 'Tailwind'],
				description:
					'Running tracker of favorite magazines built using Flask as the backend and local SQL database',
				githubLink: 'link',
			},
			{
				id: 3,
				name: 'Project 3',
				imageLink:
					'../../components/layout/assets/pankaj-patel-Ylk5n_nd9dA-unsplash.jpg',
				skillset: ['Javascript', 'React', 'Tailwind'],
				description:
					'Dentistsy lead capture website for recruiting services by providing data',
				githubLink: 'link',
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
