// import GoogleMap from '@/components/GoogleMap';
import { HomeContainer } from './home';
import { LinkStyle } from '@/styles/LinkStyle';
import Image from 'next/image';
import Link from 'next/link';

// export async function getStaticProps() {
// 	const myKey = process.env.MAPS_API_KEY as string;

// 	return {
// 		props: { myKey },
// 	};
// }

export default function Contact({ myKey }: { myKey: string }) {
	return (
		<HomeContainer>
			<h1>Contact</h1>
			<p>We meet at Kreuzpunkt im Viertel, an open room with lots of space for everyone</p>
			<p style={{ fontSize: '16px', textAlign: 'center' }}>
				Annemarie-Renger-Str. 1g <br /> 55130 Mainz
			</p>
			{/* <GoogleMap myKey={myKey} /> */}
			<Link href='https://maps.app.goo.gl/5PVqCCgcDcuJWQHVA' target='_blank' rel='noopener noreferrer'>
				<Image
					src='/map.png'
					alt='map'
					width={360}
					height={360}
					priority
					placeholder='blur'
					blurDataURL='/map.png'
					style={{ borderRadius: '10px', border: '1px solid var(--blue)', boxShadow: '0 0 5px var(--blue)' }}
				/>
			</Link>
			<p>If you have any questions, please contact us</p>
			<h3>
				WhatsApp: +49 123 456 789 | Email: 6JgJt@example.com |{' '}
				<LinkStyle href='https://www.facebook.com/profile.php?id=100072024212247' target='_blank'>
					Facebook
				</LinkStyle>
			</h3>
		</HomeContainer>
	);
}
