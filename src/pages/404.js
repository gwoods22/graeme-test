import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Styled404 = styled.div`
	margin-top: 1rem;
`;

const NotFoundPage = () => (
	<Layout>
		<SEO title="404" />
		<Styled404>
			<div className="center">
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</div>
		</Styled404>
	</Layout>
);

export default NotFoundPage;
