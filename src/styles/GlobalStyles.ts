import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
    --yellow: #e5d4a9;
    --blue: #166c9e;
    --green: #798b7d;
    --red: #ca6672;


}

*, *:before, *:after {
	box-sizing: inherit;
}

body {
	padding: 0;
	margin: 0;
	font-size: 1.5rem;
	line-height: 2;
	background: url('/ee-background.jpeg');
    background-size: cover;
    ul {
		margin: 0;
		padding: 0;
    }

    @media screen and (max-width: 768px) {
        background: url('/ee-background.jpeg') no-repeat right bottom fixed;
        background-size: cover;
    }


}

`;
