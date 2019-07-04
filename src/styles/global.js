import { createGlobalStyle } from 'styled-components';

import bulma from './bulmaSetup.scss';
import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Muli:400&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');

	${reset}
	${bulma}

	body {
		font-size: 16px;
		font-family: ${(p) => p.theme.font.body};
		color: ${(p) => p.theme.color.dark};
		padding: 2rem;
		span.bold {
			font-weight: 700;
		}

		h1{
			color: ${(p) => p.theme.color.lightGreen};
			font-family: ${(p) => p.theme.font.title};
			font-size: 3rem;
			line-height: 3.5rem;
		} h2{
			color: ${(p) => p.theme.color.lightGreen};
			font-family: ${(p) => p.theme.font.title};
			font-size: 2rem;
			line-height: 2.5rem;
		} h3 {
			color: ${(p) => p.theme.color.lightGreen};
			font-family: ${(p) => p.theme.font.title};
			font-size: 1.3rem;
			line-height: 1.6rem;
		}
	}
`;

export default GlobalStyle;
