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
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              latest
            </Link>
          </li>
          <li>
            <Link to="/page-2" className="nav-link">
              Page 2
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
  ul {
    display: flex;
    list-style-type: none;
    margin: 0 auto;
    padding: 0.8rem;
    justify-content: center;
  }

  .nav-link {
    text-decoration: none;
    color: white;
    
    border: solid 0.1rem white;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    margin: 0.5rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    font-size: 1.1rem;
    background: black;
    color: white;
    cursor: pointer;
  }
`;
