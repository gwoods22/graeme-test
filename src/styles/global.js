import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 16px;
		padding: 2rem;
		span.bold {
			font-weight: 700;
		}
	}
	* {
		box-sizing: border-box;
		font-family: ${(p) => p.theme.font};
	}
`;

export default GlobalStyle;
