'use client';
import React from 'react';
import { ThreeDCardContainer } from '../custom/3d-card-container';

const EmergencyBloodDonor = () => {
	const [bloodDonorData, setBloodDonorData] = React.useState([]);
	React.useEffect(() => {
		try {
			fetch('http://localhost:3001/bloodDonorPost')
				.then(res => res.json())
				.then(data => setBloodDonorData(data));
		} catch (e) {
			console.log(e);
		}
	});
	return (
		<section className='mt-5'>
			<div>
				<h1 className='text-5xl font-bold'>জরুরি রক্ত দাতা</h1>
			</div>

			<div className='flex gap-5 overflow-scroll -mt-10'>
				{bloodDonorData.map((post: any) => {
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

export default EmergencyBloodDonor;
