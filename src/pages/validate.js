import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ValidatePageTemplate from '../templates/validate-template';

export default ({ data }) => {
	return (
		<Layout>
			<SEO title="Validate" />
			<ValidatePageTemplate />
		</Layout>
	);
};
