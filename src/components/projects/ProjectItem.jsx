import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ imageLink, description, skills, name, id }) {
	return (
		<div className='card max-w-sm mx-auto bg-base-100 shadow-xl lg:max-w-md'>
			<figure>
				<Link to='/'>
					<img
						src='https://placeimg.com/400/225/arch'
						alt={`Project ${name}`}
					/>
				</Link>
			</figure>
			<div className='card-body'>
				<Link to='/'>
					<h2 className='card-title'>{`Project ${name}`}</h2>
					<p>{description}</p>
				</Link>
				<div className='card-actions justify-end'>
					{skills.map((skill) => (
						<div key={id} className='badge badge-primary'>
							{skill.toUpperCase()}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

ProjectItem.defaultProps = {
	name: 'Test',
	description: 'this is a good project',
	skills: ['js', 'react'],
};

export default ProjectItem;
