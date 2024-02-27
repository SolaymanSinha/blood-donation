'use client';
import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';
import Modal from './Modal';

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
		<section>
			<div className='flex justify-between -mb-10 z-10'>
				<h1 className='text-5xl font-bold'>জরুরি রক্ত প্রয়োজন</h1>
				<Modal />
			</div>

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