import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDescription from './ProjectDescription';

function ProjectItem({ imageLink, descriptions, name }) {
	return (
		<div>
			<div>
				<Link>
					<img src={imageLink} />
					<h3>{name}</h3>
				</Link>
			</div>
			<div>
				{descriptions.map((description) => (
					<ProjectDescription key={description.id} skills={skills} />
				))}
			</div>
		</div>
	);
}

export default ProjectItem;
