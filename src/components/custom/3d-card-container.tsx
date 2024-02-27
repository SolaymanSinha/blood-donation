import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import TPost from '@/types/postType';

export function ThreeDCardContainer({ post }: { post: TPost }) {
	const textMaxLength = 35;
	return (
		<CardContainer className='inter-var w-[400px] -z-10 h-full'>
			<CardBody className='bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
				<CardItem
					translateZ='50'
					className='text-2xl font-normal text-neutral-600 dark:text-white'>
					নামঃ {post.name.length > textMaxLength ? post?.name.slice(0, 40) + '...' : post?.name}
				</CardItem>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-600 dark:text-white'>
					মোবাইলঃ {post.mobile.length > textMaxLength ? post?.mobile.slice(0, 40) + '...' : post?.mobile}
				</CardItem>
				<CardItem
					as='p'
					translateZ='40'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
					ঠিকানাঃ {post.location.length > textMaxLength ? post?.location.slice(0, 40) + '...' : post?.location}
				</CardItem>
				<CardItem
					translateZ='100'
					className='w-full mt-4'>
					<h1 className='text-8xl text-red-600 text-center py-10'>{post.bloodGroup}</h1>
				</CardItem>
				<div className='mt-32 pb-0'>
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
