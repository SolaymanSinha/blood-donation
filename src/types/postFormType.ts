export type TReceiverPostFormType = {
	name: string;
	mobile: string;
	bloodGroup: string;
	description: string;
	isBloodReceive?: boolean;
	division: string;
	district: string;
	subDistrict: string;
};

export type TDonorPostFormType = {
	name: string;
	mobile: string;
	bloodGroup: string;
	description: string;
	isAvailable: boolean;
	division: string;
	district: string;
	subDistrict: string;
};
