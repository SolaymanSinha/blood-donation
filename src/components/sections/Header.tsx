import React from 'react';

export function HeaderSection() {
	return (
		<div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
			<div className='w-11/12 mx-auto'>
				<p className='text-5xl text-center md:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
					রক্ত দান: জীবনদান
				</p>
				<p className='text-center w-11/12 lg:w-2/3 mx-auto text-1xl md:text-2xl font-light'>
					রক্ত দান শুধু একটি কর্তব্য নয়, এটি একটি জীবনদান। আপনার দেওয়া রক্ত কারো প্রিয়জনের জীবন বাঁচাতে পারে, কারো মুখে ফিরিয়ে
					দিতে পারে হাসি, কারো জীবনে জ্বালাতে পারে নতুন আশার আলো।
				</p>
			</div>
		</div>
	);
}
