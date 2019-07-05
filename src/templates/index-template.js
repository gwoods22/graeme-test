import React from 'react';
import styled from 'styled-components';
import Block from '../components/block';

const HomePageTemplateStyle = styled.main`
	max-width: 800px;
	margin: 0 auto;
	h1 {
		font-size: 4rem;
		font-weight: 700;
		padding: 50px 0 10px;
	}
`;

const DetailsStyle = styled.div`
	h2 {
		color: ${(p) => p.theme.color.darkGreen};
		display: ${(p) => (p.showDetail ? 'block' : 'none')};
	}
	margin-bottom: 20px;
`;

const HomePageTemplate = ({ pageContext, showDetail }) => {
	const { title, heading, rows } = pageContext;
	return (
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
					key={index}
				/>
			))}
		</HomePageTemplateStyle>
	);
};

export default HomePageTemplate;
