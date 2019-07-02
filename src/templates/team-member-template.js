import React from 'react';
import Markdown from '../components/markdown';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ pageContext }) => {
	const { name, bio } = pageContext;
	return (
		<Layout>
			<SEO title={name} />
			<div>
				<h1>{name}</h1>
				<Markdown>{bio}</Markdown>
			</div>
		</Layout>
	);
};
