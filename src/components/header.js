import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.div`
	ul {
		display: flex;
	}
	li a {
		padding: 5px 15px 5px 0;
		color: ${(p) => p.theme.colors.primary};
		&:hover {
			color: ${(p) => p.theme.colors.secondary};
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dad-joke/">Dad Jokes</Link>
				</li>
				<li>
					<Link to="/form/">Form</Link>
				</li>
				<li>
					<Link to="/validate/">Validate</Link>
				</li>
			</ul>
		</StyledHeader>
	);
};

export default Header;
