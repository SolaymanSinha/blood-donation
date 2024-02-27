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
		<section>
			<div>
				<h1 className='text-5xl font-bold mb-10'>জরুরি রক্ত দাতা</h1>
			</div>

			<div className='flex gap-5 overflow-scroll'>
				{bloodDonorData.map((post: any) => {
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
