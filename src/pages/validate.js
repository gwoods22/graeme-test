import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ValidatePageTemplate from '../templates/validate-template';

const ValidatePage = () => (
	<Layout>
		<SEO title="Validate" />
		<ValidatePageTemplate />
	</Layout>
);

export default ValidatePage;
