import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Block from '../components/block';

const HomePageTemplateStyle = styled.main`
	max-width: 800px;
	margin: 0 auto;
	h1 {
		font-size: 4rem;
		font-weight: 700;
		padding: 50px 0 10px;
		color: ${(p) => p.theme.colors.primary};
	}
`;

const DetailsStyle = styled.div`
	h2 {
		color: ${(p) => p.theme.colors.secondary};
		display: ${(p) => (p.showDetail ? 'block' : 'none')};
	}
	margin-bottom: 20px;
`;

const HomePageTemplate = ({ pageContext, showDetail }) => {
	const { title, heading, rows } = pageContext;
	return (
		<Layout>
			<Header />
			<HomePageTemplateStyle>
				<h1>{title}</h1>
				<DetailsStyle showDetail={showDetail}>
					<h2>{heading}</h2>
				</DetailsStyle>
				{rows.map((item, index) => (
					<Block
						pLeft={index % 2 === 0 ? true : false}
						row={{
							img: item.img,
							text: item.text,
						}}
					/>
				))}
			</HomePageTemplateStyle>
		</Layout>
	);
};

export default HomePageTemplate;
