import EmergencyBloodDonor from '@/components/sections/EmergencyBloodDonor';
import EmergencyBlood from '@/components/sections/EmergencyBloodNeed';
import { HeaderSection } from '@/components/sections/Header';
import Modal from '@/components/sections/Modal';

export default function Home() {
	return (
		<main>
			<div>
				<HeaderSection />
			</div>

			<div className='mt-20'>
				<EmergencyBlood />
			</div>

			<div className='mt-20'>
				<EmergencyBloodDonor />
			</div>

			{/* Open the modal using document.getElementById('ID').showModal() method */}

			<Modal />
		</main>
	);
}
