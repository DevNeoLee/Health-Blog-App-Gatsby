import { Link } from "gatsby"
import React from "react"
import footerStyles from './footer.module.scss'

const Footer = ({ data }) => (
    <footer className={ footerStyles.footer}>     
        <p>© {new Date().getFullYear()},</p> 
        <p>Built by <Link to='/'>건강백세 프로젝트</Link></p>
        <p>{data.site.siteMetadata?.description || `Description`}</p>
        <p><Link to="/">홈페이지로 돌아가기</Link></p>
        <p>Photo by Ella Olsson from Pexels</p>
    </footer>
)

export default Footer