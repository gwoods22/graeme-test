import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import ValidatePageTemplate from '../templates/validate-template';

export const IndexPageQuery = graphql`
	{
		emails: allEmailsCsv {
			nodes {
				domain
			}
		}
	}
`;

const ValidatePage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Validate" />
			<ValidatePageTemplate badEmails={data.emails.nodes} />
		</Layout>
	);
};

export default ValidatePage;
