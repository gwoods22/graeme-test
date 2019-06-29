import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css');
	@import url('https://meyerweb.com/eric/tools/css/reset/reset.css');

	body {
		font-size: 16px;
		padding: 2rem;
	}
	* {
		box-sizing: border-box;
		font-family: ${(p) => p.theme.font};
	}
`;

export default GlobalStyle;
