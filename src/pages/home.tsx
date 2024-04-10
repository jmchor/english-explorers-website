import NextEvent from '@/components/NextEvent';
import { happy_monkey } from '@/fonts';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '@/styles/Button';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: ${happy_monkey.style.fontFamily};
	padding: 10px;

	h1 {
		font-size: 4rem;
		margin: 0;
		font-weight: bold;
	}

	p {
		font-size: 20px;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 24px;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 3rem;
		}
		h2 {
			font-size: 2rem;
		}
		h1,
		h2,
		h3,
		p {
			text-align: center;
		}
	}
`;

const IntroTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Headline = styled.h1`
	font-size: 6rem !important;
	margin: 0;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		font-size: 4rem !important;
	}
`;

const ListContainer = styled.div`
	height: 280px;
	ul {
		list-style: none;
		font-size: 24px;
		text-align: center;
	}
`;

export default function Home() {
	const [showNextEvent, setShowNextEvent] = useState(false);

	const toggleNextEvent = () => {
		setShowNextEvent(!showNextEvent);
	};

	return (
		<HomeContainer>
			<IntroTextContainer>
				<Headline>Welcome to English Explorers!</Headline>
				<h2>Speak English with fun and adventure!</h2>
			</IntroTextContainer>
			<Button onClick={toggleNextEvent}>{!showNextEvent ? 'When are we meeting?' : 'What will we be doing?'}</Button>
			{!showNextEvent ? (
				<ListContainer>
					<ul>
						<li>Meet other native speaking kids for fun activities like</li>
						<li>🎤 Singing</li>
						<li>📖 Stories</li>
						<li>👾 Games</li>
						<li>🧑‍🎨 Crafts</li>
						<li>🫧 And other adventures!</li>
					</ul>
				</ListContainer>
			) : (
				<NextEvent />
			)}
		</HomeContainer>
	);
}
