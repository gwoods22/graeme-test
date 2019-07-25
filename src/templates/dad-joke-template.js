import React, { useState } from 'react';
import styled from 'styled-components';

const DadJokeStyle = styled.main`
	h2 {
		padding: 1rem 0 2rem;
		font-size: 4rem;
		line-height: 4rem;
	}
	input {
		width: 200px;
		margin-bottom: 1rem;
	}
	form {
		margin-top: 0.5rem;
		button {
			margin-left: 0.5rem;
		}
	}
	.joke-container {
		margin-top: 2rem;
		padding: 2rem;
		width: fit-content;
		text-align: center;
		font-size: 1.5rem;
	}
`;
export default () => {
	const [name, setName] = useState('NoName');
	const [joke, setJoke] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		setJoke(`${name} is dumb.`);
		// /.netlify/functions/hello?name=${name}
	};

	return (
		<DadJokeStyle>
			<h2>
				Get Your Dad Jokes! <br />
				Hot and Fresh!
			</h2>
			{/*
				Docs: https://www.netlify.com/docs/functions/
				https://github.com/netlify/create-react-app-lambda/blob/master/src/App.js
			*/}
			<p>Enter name:</p>
			<form onSubmit={submitForm}>
				<input
					className="input"
					onFocus={() => setJoke('')}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit" className="button is-primary">
					Submit
				</button>
			</form>
			{joke !== '' && (
				<div className="joke-container card">
					<p>{joke}</p>
				</div>
			)}
		</DadJokeStyle>
	);
};
