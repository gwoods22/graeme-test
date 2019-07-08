import React from 'react';
import styled from 'styled-components';

const StyledThanks = styled.div`
	padding: 0;
	margin: 0;
	min-height: 100vh;
	background-image: url('/media/dogs.gif');
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 200px;
		margin: auto;
		text-shadow: 0px 0px 10px #0b0088;
		color: #6af100;
	}
`;

const Thanks = () => (
	<StyledThanks>
		<h1>Thanks!</h1>
	</StyledThanks>
);

export default Thanks;
