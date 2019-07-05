module.exports = {
	siteMetadata: {
		title: `Graeme Test`,
		description: `Graeme's Magical Testing Site`,
		image: '/social-image.jpg',
		twitterImage: '/android-chrome-512x512.png',
		siteUrl: 'https://graeme-test.netlify.com',
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sass`,
		'gatsby-plugin-polyfill-io',
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `media`,
				path: `${__dirname}/static/media`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pageData`,
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `emails`,
				path: `${__dirname}/src/data/emails`,
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75,
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
	],
};
