import React from 'react';
import Markdown from '../components/markdown';
import Layout from '../components/layout';
import Header from '../components/header';

export default ({ pageContext }) => {
	const { name, bio } = pageContext;
	return (
		<Layout>
			<Header />
			<div>
				<h1>{name}</h1>
				<Markdown>{bio}</Markdown>
			</div>
		</Layout>
	);
};
