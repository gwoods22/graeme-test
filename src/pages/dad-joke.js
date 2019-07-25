import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import DadJokeTemplate from '../templates/dad-joke-template';

export default () => (
	<Layout>
		<SEO title="Dad Jokes" />
		<DadJokeTemplate />
	</Layout>
);
