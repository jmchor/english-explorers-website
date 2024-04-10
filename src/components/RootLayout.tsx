import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

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
	const router = useRouter();
	const showNavbar = router.pathname !== '/'; // Hide navbar on root path
	return (
		<MainFrame>
			{showNavbar && <Navbar />}
			<MainContent>{children}</MainContent>
			<Footer> © Johannes Chorzempa 2024</Footer>
		</MainFrame>
	);
}

export default RootLayout;
