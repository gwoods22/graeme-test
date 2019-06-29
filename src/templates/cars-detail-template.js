import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';

export default ({ pageContext }) => {
	const { year, color, slug } = pageContext;
	return (
		<Layout>
			<Header />
			<div>
				<ul>
					<li>{year}</li>
					<li>{color}</li>
					<li>{slug}</li>
				</ul>
			</div>
		</Layout>
	);
};
