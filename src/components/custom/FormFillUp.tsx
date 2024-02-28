'use client';
import React from 'react';
import { bloodGroups } from '@/constants/bloodGroups';
import { allPlacesOfBangladesh } from '@/constants/subDistricts';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { TDonorPostFormType, TReceiverPostFormType } from '@/types/postFormType';

const FormFillUp = ({ whichForm }: { whichForm: 'Donor' | 'Receiver' }) => {
	let postForm: TDonorPostFormType | TReceiverPostFormType;

	if (whichForm === 'Donor') {
		postForm = {} as TDonorPostFormType;
	} else {
		postForm = {} as TReceiverPostFormType;
	}

	const methods = useForm<typeof postForm>({
		mode: 'onChange',
		defaultValues: {
			district: 'আপনার জেলা নির্বাচন করুন',
			subDistrict: 'আপনার উপজেলা নির্বাচন করুন',
			division: 'আপনার বিভাগ নির্বাচন করুন',
			bloodGroup: 'আপনার রক্তের গ্রুপ নির্বাচন করুন',
		},
	});

	const onSubmit = (data: any) => console.log(data);

	const headingTitle = whichForm === 'Donor' ? 'রক্ত দানকারী হিসেবে যুক্ত হোন' : 'রক্তের জন্য পোস্ট করুন';
	return (
		<React.Fragment>
			<section className='flex items-center h-screen justify-center'>
				<div className='p-10 bg-gray-900 rounded-lg w-full lg:w-1/2'>
					<h1 className='text-6xl text-center'>{headingTitle}</h1>
					<FormProvider {...methods}>
						<form
							className='mt-10'
							onSubmit={methods.handleSubmit(onSubmit)}>
							<div className='md:flex gap-10'>
								<NameField />
								<MobileNumberField />
							</div>

							<div className='md:flex gap-10 mt-5'>
								<BloodGroupField />
							</div>

							<div className='md:flex gap-10 mt-5'>
								<DivisionField />
								<DistrictField />
								<SubDistrictsField />
							</div>

							<button
								className='btn w-full mt-5 btn-primary'
								type='submit'>
								Post
							</button>
						</form>
					</FormProvider>
				</div>
			</section>
		</React.Fragment>
	);
};

export default FormFillUp;

const NameField = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods
	console.log(errors);

	return (
		<div className='w-full'>
			<label
				htmlFor='userName'
				className='text-base pl-2'>
				নাম
			</label>
			<br />
			<input
				{...register('name', {
					required: 'নাম দেয়া বাধ্যতামূলক',
				})}
				type='text'
				placeholder='এখানে আপনার নাম লিখুন'
				id='userName'
				className='input input-bordered w-full max-w-xs'
			/>

			{errors.name && typeof errors.name.message == 'string' && <p className='text-red-500 mt-2'>{errors.name.message}</p>}
		</div>
	);
};

const MobileNumberField = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods
	return (
		<div className='w-full'>
			<label
				htmlFor='userName'
				className='text-base pl-2'>
				মোবাইল
			</label>
			<br />
			<input
				{...register('mobile', {
					required: 'মোবাইল নাম্বার দেয়া বাধ্যতামূলক',
				})}
				type='text'
				placeholder='এখানে আপনার মোবাইল নাম্বার লিখুন'
				id='userName'
				className='input input-bordered w-full max-w-xs'
			/>

			{errors.mobile && typeof errors.mobile.message == 'string' && <p className='text-red-500 mt-2'>{errors.mobile.message}</p>}
		</div>
	);
};

const BloodGroupField = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods
	return (
		<div className='w-full'>
			<label htmlFor='bloodGroup'>রক্তের গ্রুপ</label>
			<br />
			<select
				{...register('bloodGroup', {
					required: 'রক্তের গ্রুপ দেয়া বাধ্যতামূলক',
				})}
				className='select select-bordered w-full'>
				<option
					disabled
					value={'আপনার রক্তের গ্রুপ নির্বাচন করুন'}>
					আপনার রক্তের গ্রুপ নির্বাচন করুন
				</option>
				{bloodGroups.map(bloodGroup => {
					return (
						<option
							key={bloodGroup}
							value={bloodGroup}>
							{bloodGroup}
						</option>
					);
				})}
			</select>

			{errors.bloodGroup && typeof errors.bloodGroup.message == 'string' && (
				<p className='text-red-500 mt-2'>{errors.bloodGroup.message}</p>
			)}
		</div>
	);
};

const DivisionField = () => {
	const {
		register,
		resetField,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods

	return (
		<div className='w-full'>
			<label htmlFor='bloodGroup'>বিভাগ</label>
			<br />
			<select
				{...register('division', {
					onChange: () => {
						resetField('district');
						resetField('subDistrict');
					},
					required: 'বিভাগ দেয়া বাধ্যতামূলক',
				})}
				className='select select-bordered w-full'>
				<option
					value={'আপনার বিভাগ নির্বাচন করুন'}
					disabled>
					আপনার বিভাগ নির্বাচন করুন
				</option>
				{Object.keys(allPlacesOfBangladesh).map(division => {
					return (
						<option
							key={division}
							value={division}>
							{division}
						</option>
					);
				})}
			</select>

			{errors.division && typeof errors.division.message == 'string' && (
				<p className='text-red-500 mt-2'>{errors.division.message}</p>
			)}
		</div>
	);
};

const DistrictField = () => {
	const {
		register,
		watch,
		resetField,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods
	const division: string = watch('division');

	return (
		<div className='w-full'>
			<label htmlFor='bloodGroup'>জেলা</label>
			<br />
			<select
				{...register('district', {
					onChange: () => {
						resetField('subDistrict');
					},
					required: 'জেলা দেয়া বাধ্যতামূলক',
				})}
				className='select select-bordered w-full'>
				<option
					value={'আপনার জেলা নির্বাচন করুন'}
					disabled>
					আপনার জেলা নির্বাচন করুন
				</option>
				{division !== 'আপনার বিভাগ নির্বাচন করুন' &&
					Object?.keys(allPlacesOfBangladesh[division as keyof typeof allPlacesOfBangladesh])?.map(district => {
						return (
							<option
								key={district}
								value={district}>
								{district}
							</option>
						);
					})}
			</select>

			{errors.district && typeof errors.district.message == 'string' && (
				<p className='text-red-500 mt-2'>{errors.district.message}</p>
			)}
		</div>
	);
};

const SubDistrictsField = () => {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods
	const division: string = watch('division');
	const district: string = watch('district');

	return (
		<div className='w-full'>
			<label htmlFor='bloodGroup'>উপজেলা</label>
			<br />
			<select
				{...register('subDistrict', {
					required: 'উপজেলা দেয়া বাধ্যতামূলক',
				})}
				className='select select-bordered w-full'>
				<option
					value={'আপনার উপজেলা নির্বাচন করুন'}
					disabled>
					আপনার উপজেলা নির্বাচন করুন
				</option>
				{district !== 'আপনার জেলা নির্বাচন করুন' &&
					district !== undefined &&
					division !== undefined &&
					division !== 'আপনার বিভাগ নির্বাচন করুন' &&
					allPlacesOfBangladesh[division][district] !== null &&
					allPlacesOfBangladesh[division][district] !== undefined &&
					Object.keys(allPlacesOfBangladesh[division][district])?.map((subDistrict: unknown) => {
						return (
							<option
								key={subDistrict as number}
								value={allPlacesOfBangladesh[division][district][subDistrict as number]}>
								{allPlacesOfBangladesh[division][district][subDistrict as number]}
							</option>
						);
					})}
			</select>

			{errors.subDistrict && typeof errors.subDistrict.message == 'string' && (
				<p className='text-red-500 mt-2'>{errors.subDistrict.message}</p>
			)}
		</div>
	);
};
