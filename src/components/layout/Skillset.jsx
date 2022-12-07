import React from 'react';

function Skillset() {
	return (
		<section>
			<div>
				{/* icon */}
				<div>
					<h3>Full-Stack Developer</h3>
					<p>Skillset</p>
				</div>
				<div>
					<h4>Languages I Know</h4>
					<ul role='list'>
						<li key='1'>HTML</li>
						<li key='2'>CSS</li>
						<li key='3'>Javascript</li>
						<li key='4'>Python</li>
						<li key='4'>SQL</li>
					</ul>
				</div>
				<div>
					<h4>Dev Tools</h4>
					<ul role='list'>
						<li key='1'>React</li>
						<li key='2'>Flask</li>
						<li key='3'>Tailwind</li>
						<li key='4'>Git / Github</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Skillset;
