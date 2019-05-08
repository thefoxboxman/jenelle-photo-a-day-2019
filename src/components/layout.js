import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import Navbar from "../components/globals/navbar/Navbar";
import Footer from "../components/globals/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
			<Navbar />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
