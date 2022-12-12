import React from 'react';
import Hero from '../components/layout/Hero';
import Scroll from '../components/layout/Scroll';
import Skillset from '../components/layout/Skillset';
import Projects from '../components/projects/Projects';
import ProjectItem from '../components/projects/ProjectItem';

function Home() {
	return (
		<>
			<Hero />
			<Skillset />
			{/* <Projects /> */}
			<Projects />

			<div className='card max-w-4xl bg-base-100 shadow-xl mx-auto border-red-500 border-2 text-center'>
				<div className='card-body'>
					<h2 className='card-title mx-auto'>Full-Stack Developer</h2>
					<p className='text-xl text-center'>
						With a strong background in corporate development and consulting, I
						have the experience and skills to excel as a fullstack developer at
						your startup. At my previous job at a fortune 5 healthcare company,
						I successfully closed billions in deals, demonstrating my ability to
						drive business growth. As a business operations manager at a mental
						healthcare startup, I have also gained valuable insights into the
						industry and a deep understanding of the importance of delivering
						high-quality web applications. I am confident that my skills and
						experience make me an ideal fit for your team.
					</p>
				</div>
			</div>

			<section id='logos' className='flex flex-col mx-auto md:w-11/12'>
				<h3 className='text-center'>
					I'm proud to have worked at these companies:
				</h3>
				<div className='grid grid-cols-3 items-center gap-x-10'>
					<div className='h-32'>
						<img
							className='h-full w-full object-contain object-center'
							src='./src/components/layout/assets/ey-logo.svg'
							alt='EY logo'
						/>
					</div>
					<div className='h-24 md:h-28 lg:h-32'>
						<img
							className='h-full w-full object-contain object-bottom'
							src='./src/components/layout/assets/quartet-logo.png'
							alt='Quartet logo'
						/>
					</div>
					<div className='h-32'>
						<img
							className='h-full w-full object-contain object-center'
							src='./src/components/layout/assets/uhg-logo.png'
							alt='UHG logo'
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
