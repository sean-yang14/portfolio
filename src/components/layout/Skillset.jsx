import React from 'react';

function Skillset() {
	return (
		<div className='card max-w-4xl bg-base-100 shadow-xl mx-auto border-red-500 border-2 text-center'>
			<div className='card-body'>
				<h2 className='card-title mx-auto'>Full-Stack Developer</h2>
				<h3 className='font-bold text-xl text-center'>Skillset</h3>
			</div>
			<div className='border-2 w-1/2 mx-auto'>
				<h4 className='font-bold'>Languages I Know</h4>
				<ul role='list'>
					<li key='1'>HTML</li>
					<li key='2'>CSS</li>
					<li key='3'>Javascript</li>
					<li key='4'>Python</li>
					<li key='5'>SQL</li>
				</ul>
			</div>
			<div className='border-2 w-1/2 mx-auto'>
				<h4 className='font-bold'>Dev Tools</h4>
				<ul role='list'>
					<li key='1'>
						<span className='badge badge-xs mr-2' />
						React
					</li>
					<li key='2'>Flask</li>
					<li key='3'>Tailwind</li>
					<li key='4'>Git / Github</li>
				</ul>
			</div>
		</div>
	);
}

export default Skillset;
