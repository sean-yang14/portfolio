import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div className='flex h-[75vh] justify-center items-center text-center border-red-500 border-2'>
			<div className='w-10/12 border-red-500 border-2'>
				<h1 className='my-8 text-4xl font-bold lg:text-5xl'>My Story</h1>
				<p>
					I'm a software developer with a passion for building solutions to
					human problems. I have an extensive business background with
					experience in Corporate Development at a Fortune 5 company, as a
					consultant at EY, and as a Business Operations manager at a healthcare
					startup.
				</p>
				<p className='mt-4'>
					Early on in my career I discovered that I wanted to be an operator and
					so I made moves to get closer to that goal, moving from an investor
					role to business operations. However, I quickly realized that the work
					I really love is building solutions that solve end user problems.
					That's why I decided to take the leap and attend a bootcamp, so that I
					could learn how to build product ideas myself.
				</p>
				<p className='mt-4'>
					Though I'm comfortable in all phases of development, I really enjoy
					the human problem solving component and multi-team collaboration of
					front-end development. Through my past professional experiences, I
					bring my strategic, problem solving, and project management skill set
					to a developer role.
				</p>
			</div>
		</div>
	);
}

export default About;
