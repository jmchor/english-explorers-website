import React from 'react';
import { NextPageContext } from 'next';
import useFormattedDate from '@/lib/useFormattedDate';
import styled from 'styled-components';
// Import the custom hook

const EventContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background-color: #fff8f879;
	height: 280px;
	width: 330px;

	box-shadow: 0 0 5px var(--blue);
	border-radius: 10px;
	p {
		margin: 0;
		font-size: 24px;
	}
`;

const NextEvent: React.FC = () => {
	const getCurrentDate = (): Date => {
		return new Date();
	};

	const getNextWednesday = (currentDate: Date): Date => {
		const daysUntilNextWednesday = (3 - currentDate.getDay() + 7) % 7; // Calculate days until next Wednesday
		const nextWednesday = new Date(currentDate);
		nextWednesday.setDate(currentDate.getDate() + daysUntilNextWednesday);
		nextWednesday.setHours(16, 15, 0, 0); // Set time to 16:15:00

		return nextWednesday;
	};

	const currentDate = getCurrentDate();
	const nextWednesday = getNextWednesday(currentDate);

	const isBeforeNextEvent = currentDate < nextWednesday;

	const eventDate = isBeforeNextEvent
		? useFormattedDate(nextWednesday)
		: useFormattedDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));

	const eventTime = isBeforeNextEvent
		? nextWednesday.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
		: '16:15';

	return (
		<EventContainer>
			{' '}
			<p>
				<b>Next Event</b>
			</p>
			<p>
				{eventDate} at {eventTime}
			</p>
			<p>Where?</p>
			<p>Kreuzpunkt im Viertel</p>
		</EventContainer>
	);
};

export default NextEvent;
