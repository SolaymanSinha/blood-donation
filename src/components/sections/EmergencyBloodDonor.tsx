'use client';
import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';
import { bloodDonorPost } from '@/DB/db';

const EmergencyBloodDonor = () => {
	return (
		<section>
			<div>
				<h1 className='text-5xl font-bold mb-10'>জরুরি রক্ত দাতা</h1>
			</div>

			<div className='flex gap-5 overflow-scroll'>
				{bloodDonorPost.map((post: any) => {
					return (
						<div
							key={post.id}
							className='place-self-stretch justify-items-stretch justify-self-stretch'>
							<ThreeDCardContainer post={post} />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default EmergencyBloodDonor;
