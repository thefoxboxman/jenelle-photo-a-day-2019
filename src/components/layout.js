import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
				{/* disable header
				<Header siteTitle={data.site.siteMetadata.title} /> 
				*/}
        <div> 
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by John De Costa,  "Head Web Wrangler" at  
            {` `}
            <a href="https://eaglefox-site.netlify.com">... Eaglefox</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
