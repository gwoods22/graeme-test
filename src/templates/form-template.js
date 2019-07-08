import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.main`
	display: flex;
	justify-content: center;

	.formWrap {
		background: #f6fb00;
		padding: 2rem;
		h2 {
			font-size: 1.5rem;
			margin-bottom: 20px;
		}
		input {
			margin-bottom: 20px;
		}
		fieldset {
			margin-bottom: 16px;
			input {
				position: relative;
				bottom: -16px;
				left: -13px;
			}
		}
		#color {
			width: 100%;
		}
		.name-label,
		.rating-label {
			display: block;
		}
	}

	.thanks {
		width: 200px;
		height: 324px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		background: #f6fb00;
		padding: 2rem;
	}
`;

const FormTemplate = () => {
	const [thanks, setThanks] = useState(false);

	useEffect(() => {
		setThanks(window.location.search === '?thanks=true');
	});
	return (
		<StyledForm>
			{!thanks && (
				<form
					name="Test Form"
					method="post"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					action="/form/?thanks=true"
				>
					<div className="formWrap">
						<input type="hidden" name="form-name" value="Test Form" />
						<h2>FORM</h2>
						<input type="hidden" name="bot-field" />
						<label className="name-label" htmlFor="name">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="John Smith"
							required
						/>

						<p>Rating:</p>
						<fieldset>
							<label className="radio">
								1
								<input type="radio" value="1" id="rating-1" name="rating:" />
							</label>
							<label className="radio">
								2
								<input type="radio" value="2" id="rating-2" name="rating:" />
							</label>
							<label className="radio">
								3
								<input type="radio" value="3" id="rating-3" name="rating:" />
							</label>
							<label className="radio">
								4
								<input type="radio" value="4" id="rating-4" name="rating:" />
							</label>
							<label className="radio">
								5
								<input type="radio" value="5" id="rating-5" name="rating:" />
							</label>
						</fieldset>
						<label htmlFor="color">Colour:</label>
						<input type="color" id="color" placeholder="#ff0000" name="color" />
						<br />
						<button type="submit" className="button">
							Submit
						</button>
					</div>
				</form>
			)}
			{thanks && (
				<div className="thanks">
					<h2>Thanks!</h2>
					<p>Chat soon!</p>
				</div>
			)}
		</StyledForm>
	);
};

export default FormTemplate;
