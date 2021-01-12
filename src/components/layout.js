
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <>
      <Header prop={'hello'} siteTitle={data.site.siteMetadata?.title || `Title`}
               />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
         
          © {new Date().getFullYear()}, Built by <Link to='/'>건강백세 프로젝트</Link>
          {` `} 
          {data.site.siteMetadata?.description || `Description`}
          <Link to="/">홈페이지로 돌아가기</Link>
          <p>Photo by Ella Olsson from Pexels</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
