'use client';
import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';
import { bloodNeedPost } from '@/DB/db';

const EmergencyBlood = () => {
	return (
		<section className='mt-20'>
			<h1 className='text-5xl font-bold mb-10'>জরুরি রক্ত প্রয়োজন</h1>

			<div className='flex gap-5 overflow-scroll -z-10'>
				{bloodNeedPost.map((post: any) => {
					return (
						<ThreeDCardContainer
							key={post.id}
							post={post}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default EmergencyBlood;
