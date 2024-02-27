import EmergencyBloodDonor from '@/components/sections/EmergencyBloodDonor';
import EmergencyBlood from '@/components/sections/EmergencyBloodNeed';
import { HeaderSection } from '@/components/sections/Header';
import Modal from '@/components/sections/Modal';

export default function Home() {
	return (
		<main>
			<div className='-z-10'>
				<HeaderSection />
			</div>

			<div className='mt-32 z-10'>
				<EmergencyBlood />
			</div>

			<div className='mt-20'>
				<EmergencyBloodDonor />
			</div>
		</main>
	);
}
