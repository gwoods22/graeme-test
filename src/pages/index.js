import React from 'react';
import { graphql } from 'gatsby';
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
		<HomePageTemplate
			pageContext={allPagesJson.edges[0].node}
			showDetail={true}
		/>
	);
};

export default IndexPage;
