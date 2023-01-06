import React from 'react';

function About() {
	return (
		<div className='flex justify-center items-center text-center mt-4 px-2 md:mt-8'>
			<div className='container p-4 border-[1px] rounded-lg shadow-xl md:w-10/12 lg:p-8'>
				<h1 className='mb-8 text-4xl font-bold lg:text-5xl'>My Story</h1>
				<p>
					I'm a software developer with a passion for building solutions to
					human problems. I have an extensive business background with
					experience in mergers & acquisitions at a Fortune 5 company, as a
					consultant at EY, and now as a business operations manager at a
					healthcare startup.
				</p>
				<p className='mt-4'>
					While working in finance, I quickly discovered that my passion lay in
					building a company rather than buying them. I shifted the direction of
					my career to focus on becoming an operator, starting with a jump to
					consulting and then moving into business operations. Yet these
					experiences have not satisfied my building itch. I came to realize
					that the work I love doing is literally building the solutions to end
					user problems. That’s why I decided to take the leap and attend a
					bootcamp.
				</p>
				<p className='mt-4'>
					Though I'm comfortable in all phases of development, I really enjoy
					the user focus and multi-team collaboration aspects of front-end
					development. I bring a number of skills, from strategic problem
					solving to project management, that will help your company in and
					beyond a developer role.
				</p>
			</div>
		</div>
	);
}

export default About;
