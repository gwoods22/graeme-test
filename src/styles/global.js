import { createGlobalStyle } from 'styled-components';

import bulma from './bulmaSetup.scss';
import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');

	${reset}
	${bulma}

	body {
		font-size: 16px;
		font-family: ${(p) => p.theme.font};
		padding: 2rem;
		span.bold {
			font-weight: 700;
		}
	}
`;

export default GlobalStyle;
