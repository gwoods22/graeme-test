import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';

const StyledForm = styled.main`
	display: flex;
	justify-content: center;

	.formWrap {
		background: #f6fb00;
		padding: 30px;
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
	}
`;

const FormTemplate = () => {
	return (
		<Layout>
			<Header />
			<StyledForm>
				<form
					name="Test Form"
					method="post"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					action="/thanks"
				>
					<div className="formWrap">
						<input type="hidden" name="form-name" value="Test Form" />
						<h2>FORM</h2>
						<p>Name:</p>
						<input type="hidden" name="bot-field" />
						<input
							type="text"
							id="name"
							name="name"
							placeholder="John Smith"
							required
						/>
						<fieldset>
							<p>Rating:</p>
							<label className="radio is-hidden" htmlFor="rating" />
							<label className="radio" htmlFor="1">
								1<input type="radio" value="1" id="rating-1" name="rating" />
							</label>
							<label className="radio" htmlFor="2">
								2<input type="radio" value="2" id="rating-2" name="rating" />
							</label>
							<label className="radio" htmlFor="3">
								3<input type="radio" value="3" id="rating-3" name="rating" />
							</label>
							<label className="radio" htmlFor="4">
								4<input type="radio" value="4" id="rating-4" name="rating" />
							</label>
							<label className="radio" htmlFor="5">
								5<input type="radio" value="5" id="rating-5" name="rating" />
							</label>
						</fieldset>
						<p>Colour:</p>
						<input type="color" id="color" placeholder="#ff0000" name="color" />
						<br />
						<button type="submit" className="button">
							Submit
						</button>
					</div>
				</form>
			</StyledForm>
		</Layout>
	);
};

export default FormTemplate;
