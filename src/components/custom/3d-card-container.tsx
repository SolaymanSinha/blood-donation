'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

export function ThreeDCardContainer() {
	return (
		<CardContainer className='inter-var w-[400px]'>
			<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
				<CardItem
					translateZ='50'
					className='text-2xl font-normal text-neutral-600 dark:text-white'>
					নামঃ শাহ্‌ সোলায়মান সিনহা
				</CardItem>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-600 dark:text-white'>
					মোবাইলঃ 01620768962
				</CardItem>
				<CardItem
					as='p'
					translateZ='40'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
					ঠিকানাঃ US-Bangla Hospital, Dhaka, Bangladesh
				</CardItem>
				<CardItem
					translateZ='100'
					className='w-full mt-4'>
					<Image
						src='https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png'
						height='1000'
						width='1000'
						className='h-80 w-90 object-cover rounded-xl group-hover/card:shadow-xl text-center'
						alt='thumbnail'
					/>
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
