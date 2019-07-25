import React, { useState } from 'react';
import styled from 'styled-components';

const StyledValidate = styled.div`
	.validate {
		padding: 4rem 6rem;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	h2 {
		font-size: 1.3rem;
		margin: 2rem 0 0.5rem;
	}
	label {
		margin-bottom: 1rem;
	}
	textarea {
		width: 300px;
		height: 100px;
		resize: none;
	}
	.submit-container {
		margin-top: 0.5rem;
	}
`;

const ValidateTemplate = () => {
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event) => {
		let emails = input.split(',');
		let i,
			resultList = [];
		for (i in emails) {
			// let data = { email: emails[i], real: disposable.validate(emails[i]) };
			let data = { email: emails[i], real: true };
			console.log(data);

			resultList.push(data);
		}
		event.preventDefault();
		setShowResults(true);
		setResults(resultList);
	};

	return (
		<>
			<StyledValidate>
				<div className="validate">
					<div className="container">
						<form onSubmit={handleSubmit}>
							<label className="has-text-weight-bold" htmlFor="emails">
								Enter emails here:
							</label>
							<textarea
								className="textarea"
								id="emails"
								type="text"
								onChange={handleChange}
							/>

							<div className="submit-container">
								<input className="button" type="submit" value="Submit" />
							</div>
						</form>
						{showResults && (
							<div className="results">
								<h2>Results</h2>
								<table className="table is-bordered">
									<tbody>
										<tr>
											<th>Email:</th>
											<th>Is Real</th>
										</tr>
										{results.map((x, i) => (
											<tr key={i}>
												<td>{x.email}</td>
												<td
													className={
														x.real ? 'has-text-success' : 'has-text-danger'
													}
												>
													{x.real.toString()}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</div>
			</StyledValidate>
		</>
	);
};

export default ValidateTemplate;
