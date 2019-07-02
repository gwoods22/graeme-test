import React, { useState } from 'react';
import styled from 'styled-components';

const DadJokeStyle = styled.main`
	h2 {
		padding: 1rem 0 2rem;
		font-size: 4rem;
	}
	form {
		width: 300px;
		input {
			margin-bottom: 1rem;
		}
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
			<form className="form" action="/.netlify/functions/hello">
				<label className="label">
					Enter name:
					<input className="input" onChange={(e) => setName(e.target.value)} />
					<button type="submit" className="button is-primary">
						Submit
					</button>
				</label>
			</form>
		</DadJokeStyle>
	);
};

export default PageTwoTemplate;
