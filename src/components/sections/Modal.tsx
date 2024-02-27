'use client';
import { TReceiverPostFormType } from '@/types/postFormType';
import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TReceiverPostFormType>();

	function handleModal() {
		const element = document.getElementById('my_modal_5') as HTMLDialogElement;

		if (element !== null) {
			element.showModal();
		}
	}
	return (
		<div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button
				className='btn'
				onClick={() => handleModal}>
				open modal
			</button>
			<dialog
				id='my_modal_5'
				className='modal modal-bottom sm:modal-middle'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg mb-2'>জরুরী রক্তের জন্য পোস্ট করুন</h3>
					<form>
						<div className='md:flex gap-10'>
							<div>
								<label
									htmlFor='userName'
									className='text-base pl-2'>
									নাম
								</label>
								<br />
								<input
									type='text'
									placeholder='এখানে আপনার নাম লিখুন'
									id='userName'
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
							<div>
								<label
									htmlFor='userName'
									className='text-base pl-2'>
									মোবাইল
								</label>
								<br />
								<input
									type='text'
									placeholder='এখানে আপনার মোবাইল নাম্বার লিখুন'
									id='userName'
									className='input input-bordered w-full max-w-xs'
								/>
							</div>
						</div>
					</form>
					<div className='modal-action'>
						<form method='dialog'>
							{/* if there is a button in form, it will close the modal */}
							<button className='btn'>Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Modal;
