import React from "react";

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built by John De Costa, "Head Web Wrangler"
      at
      <a href="https://www.eaglefox.com.au">... Eaglefox</a>
    </footer>
  );
};

export default Footer;
