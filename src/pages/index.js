import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import HomePageTemplate from '../templates/index-template';

export const IndexPageQuery = graphql`
	{
		allPagesJson {
			edges {
				node {
					title
					heading
					rows {
						text
						img
					}
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	const { allPagesJson } = data;
	return (
		<Layout>
			<SEO title="Home" />
			<HomePageTemplate
				pageContext={allPagesJson.edges[0].node}
				showDetail={true}
			/>
		</Layout>
	);
};

export default IndexPage;
