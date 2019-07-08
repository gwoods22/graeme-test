const path = require('path');
const slugTransform = require('slug');

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `CarsJson`) {
		const slug = slugTransform(node.title, { lower: true });
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
		{
			team: allTeamJson {
				edges {
					node {
						name
						bio
						slug
					}
				}
			}
			cars: allCarsJson {
				edges {
					node {
						year
						color
						fields {
							slug
						}
					}
				}
			}
		}
	`).then((result) => {
		result.data.team.edges.forEach(({ node }) => {
			createPage({
				path: node.slug,
				component: path.resolve(`./src/templates/team-member-template.js`),
				context: {
					name: node.name,
					bio: node.bio,
				},
			});
		});
		result.data.cars.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/cars-detail-template.js`),
				context: {
					year: node.year,
					color: node.color,
					slug: node.fields.slug,
				},
			});
		});
	});
};
