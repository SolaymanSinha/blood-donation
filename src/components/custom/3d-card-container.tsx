'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import TPost from '@/types/postType';

export function ThreeDCardContainer({ post }: { post: TPost }) {
	const bloodGroupImage = {
		a_positive: 'https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png',
		a_negative: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKp-OJbHzk6LJ8-bTJ-LrFd1tdBVH5vsgsWtS-ciXwA&s',
		b_positive: '/b_positive.png',
		b_negative: '/b_negative.png',
		o_positive: '/o_positive.png',
		o_negative: '/o_negative.png',
		ab_positive: '/ab_positive.png',
		ab_negative: '/ab_negative.png',
	};

	function getImageUrl(): string {
		switch (post.bloodGroup) {
			case 'A+':
				return bloodGroupImage.a_positive;
			case 'A-':
				return bloodGroupImage.a_negative;
			case 'B+':
				return bloodGroupImage.b_positive;
			case 'B-':
				return bloodGroupImage.b_negative;
			case 'O+':
				return bloodGroupImage.o_positive;
			case 'O-':
				return bloodGroupImage.o_negative;
			case 'AB+':
				return bloodGroupImage.ab_positive;
			case 'AB-':
				return bloodGroupImage.ab_negative;
			default:
				// Handle cases where bloodGroup is invalid
				return 'Invalid Blood Group';
		}
	}

	return (
		<CardContainer className='inter-var w-[400px]'>
			<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
				<CardItem
					translateZ='50'
					className='text-2xl font-normal text-neutral-600 dark:text-white'>
					নামঃ {post?.name}
				</CardItem>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-600 dark:text-white'>
					মোবাইলঃ {post?.mobile}
				</CardItem>
				<CardItem
					as='p'
					translateZ='40'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
					ঠিকানাঃ {post?.location}
				</CardItem>
				<CardItem
					translateZ='100'
					className='w-full mt-4'>
					{/* <Image
						src='https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png'
						height='1000'
						width='1000'
						className='h-80 w-90 object-cover rounded-xl group-hover/card:shadow-xl text-center'
						alt='thumbnail'
					/> */}
					<h1 className='text-8xl text-red-600 text-center py-10'>{post.bloodGroup}</h1>
				</CardItem>
				<div className='mt-20'>
					<CardItem
						translateZ={20}
						as='button'
						className='px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xl font-bold'>
						বিস্তারিত
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
