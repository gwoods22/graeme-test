/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, keywords, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						image
						siteUrl
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const url = site.siteMetadata.siteUrl;
	const image = `${url}${site.siteMetadata.image}`;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
			<meta name="twitter:image:src" content={image} />
			<meta property="og:locale" content="'en_US'" />
			<meta property="og:site_name" content={title} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={`${url}/`} />
			<meta name="image" content={image} />
			<meta itemprop="name" content={title} />
			<meta itemprop="description" content={metaDescription} />
			<meta itemprop="image" content={image} />
			{keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(`, `)} />
			)}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#32de8a" />
			<meta name="msapplication-TileColor" content="#32de8a" />
			<meta name="theme-color" content="#ffffff" />
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default SEO;
