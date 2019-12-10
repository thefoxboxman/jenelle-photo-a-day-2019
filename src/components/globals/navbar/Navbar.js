import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navbar = () => {
	//set initial state navbar to false ie closed

	const [navbarOpen, setNavbarOpen] = useState(false);

	//method to handle navbar action
	// handleNavbar = () => {
	//  this.setState(() => {
	//   return {
	//   navbarOpen: !this.state.navbarOpen
	// };
	//});
	// };
	return (
		<NavWrapper>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/JanMar" className="nav-link">
							Jan-March
						</Link>
					</li>
					<li>
						<Link to="/AprJun" className="nav-link">
							April-June
						</Link>
					</li>
					<li>
						<Link to="/JulySept" className="nav-link">
							July-Sept
						</Link>
					</li>
					<li>
						<Link to="/OctDec" className="nav-link">
							Oct-Dec
						</Link>
					</li>
				</ul>
			</nav>
		</NavWrapper>
	);
};

export default Navbar;

//style the navbar with media query
const NavWrapper = styled.div`
	.navbar {
		padding-top: 15px;
		border-top: solid 0.1rem white;
		border-bottom: solid 0.1rem white;
	}
	ul {
		display: flex;
		list-style-type: none;
		margin: 0 auto;
		padding: 0;
		justify-content: center;
		align-items: center;
	}

	.nav-link {
		text-decoration: none;
		color: white;

		border: solid 0.1rem white;
		border-radius: 0.3rem;
		font-size: 0.9rem;
		padding: 0.1rem 0.5rem;
		margin: 1rem;
		text-transform: capitalize;
	}
	.nav-link:hover {
		font-size: 1.1rem;
		background: black;
		color: white;
		cursor: pointer;
	}
`;
