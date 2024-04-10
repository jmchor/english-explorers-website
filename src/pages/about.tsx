import { HomeContainer } from './home';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionComponent from '@/components/Accordion';

const Aboutcontainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
`;

export default function About() {
	return (
		<HomeContainer>
			<Aboutcontainer>
				<h1>About</h1>
				<p>
					English Explorers was formed in 2013 by a group of native English speakers who wanted to give their kids the
					opportunity to speak their native language with other kids.
				</p>
				<AccordionContainer>
					<AccordionComponent
						summary='"Who is there, and who can join?"'
						details='Currently, we have an average of 10 kids between 3 and 10 years of age, and we are welcoming families with
								children 0-10 who speak English at home with at least one parent.'
					/>
					<AccordionComponent
						summary='"Is this for free?"'
						details='We do not require any money for admission, but for material and such we ask every attending family to pay 25 Euro for six months.'
					/>
					<AccordionComponent
						summary='"What do you do exactly?"'
						details='Our activities include singing together and story time, as well as arts and crafts and other games. We try to make it as inclusive and engaging as possible for everybody, which for example includes grouping children for more age-appropriate activities.'
					/>
					<AccordionComponent
						summary='"Can I help?"'
						details='Absolutely you can help! We appreciate every support - even if it is "just" for the cleanup afterwards. Please contact us so we can talk more.'
					/>
				</AccordionContainer>
			</Aboutcontainer>
		</HomeContainer>
	);
}
