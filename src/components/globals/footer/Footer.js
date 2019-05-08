import React from "react";
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
        © {new Date().getFullYear()}, Built by John De Costa, "Head Web
        Wrangler" at
        <a href="https://www.eaglefox.com.au">... Eaglefox</a>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;