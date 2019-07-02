import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';

const DadJokeStyle = styled.main`
	h2 {
		padding: 70px 50px;
		font-size: 4rem;
		color: ${(p) => p.theme.color.lightGreen};
	}
`;
const PageTwoTemplate = () => {
	return (
		<Layout>
			<Header />
			<DadJokeStyle>
				<h2>
					Get Your Dad Jokes! <br />
					Hot and Fresh!
				</h2>
				{/* Docs: https://www.netlify.com/docs/functions/ */}
				<a href="/.netlify/functions/hello">Hello!</a>
				<div className="img-container">
					<img src="https://picsum.photos/500/280" alt="placeholder" />
				</div>
			</DadJokeStyle>
		</Layout>
	);
};

export default PageTwoTemplate;
