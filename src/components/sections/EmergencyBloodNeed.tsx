'use client';
import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';

const EmergencyBlood = () => {
	const [bloodNeedData, setBloodNeedData] = React.useState([]);

	React.useEffect(() => {
		try {
			fetch('http://localhost:3001/bloodNeedPost')
				.then(res => res.json())
				.then(data => setBloodNeedData(data));
		} catch (e) {
			console.log(e);
		}
	});
	return (
		<section className='mt-20'>
			<h1 className='text-5xl font-bold mb-10'>জরুরি রক্ত প্রয়োজন</h1>

			<div className='flex gap-5 overflow-scroll -z-10'>
				{bloodNeedData.map((post: any) => {
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
