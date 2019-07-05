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
	span {
		margin: 0.1rem 0 1rem;
		font-size: 0.8rem;
	}
	textarea {
		width: 300px;
		height: 100px;
		resize: none;
	}
	.submit-container {
		margin-top: 0.5rem;
	}
	th {
		font-weight: 700;
	}
`;

const ValidateTemplate = ({ badEmails }) => {
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);
	const [stats, setStats] = useState([]);
	const [showResults, setShowResults] = useState(false);

	const isReal = (email) => {
		const searchDomain = email.split('@')[1].trim();

		let i,
			realVal = true;
		for (i in badEmails) {
			if (badEmails[i].domain === searchDomain) realVal = false;
		}
		return realVal;
	};

	const handleSubmit = (event) => {
		let emails = input.split(',');
		let i,
			fakes = 0,
			resultList = [];
		for (i in emails) {
			if (emails[i] !== ' ' && emails[i] !== '') {
				let data = { email: emails[i], real: isReal(emails[i]) };
				resultList.push(data);
				if (!isReal(emails[i])) fakes++;
			}
		}
		event.preventDefault();
		setShowResults(true);
		setResults(resultList);

		// Stats data
		const len = resultList.length;

		setStats([
			{ text: 'Total emails', value: len, className: '' },
			{
				text: 'Fake Email %',
				value: `${((fakes / len) * 100).toFixed(1)}%`,
			},
			{ text: 'Fake Emails', value: fakes, className: 'has-text-danger' },
			{
				text: 'Real Emails',
				value: len - fakes,
				className: 'has-text-success',
			},
		]);
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
							<span>(comma separated)</span>
							<textarea
								className="textarea"
								id="emails"
								type="text"
								onChange={(e) => setInput(e.target.value)}
							/>

							<div className="submit-container">
								<input className="button" type="submit" value="Submit" />
							</div>
						</form>
						{showResults && (
							<div className="columns">
								<div className="column is-half">
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
								</div>
								<div className="column is-half">
									<h2>Stats</h2>
									<table className="table is-bordered">
										<tbody>
											{stats.map((x, i) => (
												<tr key={i} className={x.className}>
													<td>{x.text}</td>
													<td>{x.value}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						)}
					</div>
				</div>
			</StyledValidate>
		</>
	);
};

export default ValidateTemplate;
