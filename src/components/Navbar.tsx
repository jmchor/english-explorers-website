import Link from 'next/link';
import styled from 'styled-components';

const NavLink = styled(Link)`
	color: white;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

const NavbarStyles = styled.div`
	display: flex;
	flex-direction: row;
	height: 70px;
	width: 100vw;
	border: 1px solid black;
	background-color: var(--blue);
	justify-content: center;
	align-items: center;
	position: fixed;

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		color: white;
		gap: 10rem;

		li {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 768px) {
		ul {
			gap: 5rem;
		}
	}
`;

const Navbar = () => {
	return (
		<NavbarStyles>
			<ul>
				<li>
					<NavLink href='/home'>Home</NavLink>
				</li>
				<li>
					<NavLink href='/about'>About</NavLink>
				</li>
				<li>
					<NavLink href='/contact'>Contact</NavLink>
				</li>
			</ul>
		</NavbarStyles>
	);
};
export default Navbar;
