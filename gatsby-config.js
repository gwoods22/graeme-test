module.exports = {
	siteMetadata: {
		title: `Graeme Test`,
		description: `Graeme's Magical Testing Site`,
		image: '/media/random3.jpg',
		siteUrl: 'https://graeme-test.netlify.com/',
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sass`,
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
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#FFFFFF`,
				theme_color: `#32DE8A`,
				display: `minimal-ui`,
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
