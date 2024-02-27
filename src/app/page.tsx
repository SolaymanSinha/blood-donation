import EmergencyBloodDonor from '@/components/sections/EmergencyBloodDonor';
import EmergencyBlood from '@/components/sections/EmergencyBloodNeed';
import { HeaderSection } from '@/components/sections/Header';

export default function Home() {
	return (
		<main>
			<div className='-z-10'>
				<HeaderSection />
			</div>

			<div className='mt-32 z-10'>
				<EmergencyBlood />
			</div>

			<div className='mt-32'>
				<EmergencyBloodDonor />
			</div>
		</main>
	);
}
