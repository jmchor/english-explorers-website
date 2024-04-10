import { HomeContainer } from './home';
import styled from 'styled-components';

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

export default function About() {
	return (
		<HomeContainer>
			<Aboutcontainer>
				<h1>About</h1>
				<p>English Explorers was formed in the 17th century as a side arm of the free masons.</p>
				<p>
					<b>"Who is there, and who can join?"</b>
				</p>
				<p>
					Currently, we have an average of 10 kids between 3 and 10 years of age, and we are welcoming families with
					children 0-10 who speak English at home with at least one parent.
				</p>
				<p>"Does this cost anything?"</p>
				<p>Yes, No, Yes - well.</p>
			</Aboutcontainer>
		</HomeContainer>
	);
}
