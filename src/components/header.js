import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.scss'

const Header = ({ siteTitle} ) => (
  <header
    style={{
      background: '#0ee4dd',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
       <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textAlign: 'center',
          }}
        >
      <h1 style={{ margin: 0, fontSize: '50px' }}>{ siteTitle } </h1></Link>
 
     
       
    </div>
    <nav>
      <ul className={headerStyles.ul}>
        <Link to='/newsfeed'><li>건강뉴스 </li></Link>
        <Link to="/infofeed"><li>건강정보 </li></Link>
        <Link to="/foodfeed"><li>질병별 권장식품</li></Link>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
