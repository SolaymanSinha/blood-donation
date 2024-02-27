import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';

const EmergencyBlood = () => {
	return (
		<section className='mt-5'>
			<div>
				<h1 className='text-5xl font-bold'>জরুরি রক্ত প্রয়োজন</h1>
			</div>

			<div className='flex gap-5 overflow-scroll -mt-10'>
				<ThreeDCardContainer />
				<ThreeDCardContainer />
				<ThreeDCardContainer />
				<ThreeDCardContainer />
				<ThreeDCardContainer />
			</div>
		</section>
	);
};

export default EmergencyBlood;