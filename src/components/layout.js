import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Header from '../components/header';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Header />
			{children}
		</>
	</ThemeProvider>
);

export default Layout;
