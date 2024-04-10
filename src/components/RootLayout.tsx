import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	height: 30px;
	width: 100vw;
	justify-content: center;
`;

const MainFrame = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 70px;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<MainFrame>
			<Navbar />
			<MainContent>{children}</MainContent>
			<Footer> © Johannes Chorzempa 2024</Footer>
		</MainFrame>
	);
}

export default RootLayout;
