import GoogleMap from '@/components/GoogleMap';
import { HomeContainer } from './home';
import { LinkStyle } from '@/styles/LinkStyle';

export default function Contact() {
	return (
		<HomeContainer>
			<h1>Contact</h1>
			<p>We meet at Kreuzpunkt im Viertel, an open room with lots of space for everyone</p>
			<GoogleMap />
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
