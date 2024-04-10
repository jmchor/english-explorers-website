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
					<AccordionComponent />
				</AccordionContainer>
			</Aboutcontainer>
		</HomeContainer>
	);
}
