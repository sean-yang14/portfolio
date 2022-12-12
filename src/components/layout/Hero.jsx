import React from 'react';

function Hero() {
	return (
		<div className='hero min-h-[75vh] bg-base-200 container mx-auto'>
			<div className='hero-content flex-col border-red-500 border-2 lg:flex-row-reverse'>
				<div className='border-2 lg:w-1/2 lg:flex lg:justify-center'>
					<img
						src='./src/components/layout/assets/hal-gatewood-weRQAu9TA-A-unsplash.jpg'
						className='mask mask-circle max-w-xs rounded-lg shadow-2xl md:max-w-sm lg:max-w-xl'
					/>
				</div>
				<div className='mt-4 lg:w-1/2 lg:mt-0'>
					<h1 className='text-5xl font-bold text-center border-2'>
						Hi, My Name is Sean
					</h1>
					<p className='py-4 border-2 text-center'>
						I'm a full-stack developer based in NYC. I love building solutions
						to meaningful human problems
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
