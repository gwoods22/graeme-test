import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<main>{children}</main>
		</>
	</ThemeProvider>
);

export default Layout;
