import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ pageContext }) => {
	const { year, color, slug } = pageContext;

	const beforeDash = slug.split('-')[0].length;

	const deSlugged =
		slug.slice(0, 1).toUpperCase() + slug.split('-')[0].slice(1, beforeDash);

	return (
		<Layout>
			<SEO title={deSlugged} />
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
