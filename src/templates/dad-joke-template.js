import React, { useState } from 'react';
import styled from 'styled-components';

const DadJokeStyle = styled.main`
	h2 {
		padding: 1rem 0 2rem;
		font-size: 4rem;
	}
	input {
		width: 200px;
		margin-bottom: 1rem;
	}
	button {
		display: block;
	}
`;
const PageTwoTemplate = () => {
	const [name, setName] = useState('NoName');
	return (
		<DadJokeStyle>
			<h2>
				Get Your Dad Jokes! <br />
				Hot and Fresh!
			</h2>
			{/* Docs: https://www.netlify.com/docs/functions/ */}

			<p>Enter name:</p>
			<input className="input" onChange={(e) => setName(e.target.value)} />
			<button
				href={`/.netlify/functions/hello?name=${name}`}
				className="button is-primary"
			>
				Submit
			</button>
		</DadJokeStyle>
	);
};

export default PageTwoTemplate;
