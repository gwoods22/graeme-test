import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css');

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
