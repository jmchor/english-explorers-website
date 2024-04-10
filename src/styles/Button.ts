import { happy_monkey } from '@/fonts';
import styled from 'styled-components';

export const Button = styled.button`
	background-color: white;
	color: var(--blue);
	border: 1px solid var(--blue);
	border-radius: 5px;
	padding: 10px 20px;
	font-family: ${happy_monkey.style.fontFamily};
	font-size: 20px;
	margin: 2rem;
`;
