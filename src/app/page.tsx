import EmergencyBloodDonor from '@/components/sections/EmergencyBloodDonor';
import EmergencyBlood from '@/components/sections/EmergencyBloodReceive';
import { HeaderSection } from '@/components/sections/Header';

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
		</main>
	);
}
