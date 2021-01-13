import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsFeed from '../components/newsfeed'

const NewsFeedPage = () => {

  return (<Layout>
    <SEO title="건강뉴스 모음" />
    <NewsFeed />
    <p>메이저 중요한 건강뉴스들을 모았습니다.</p>
  </Layout>)
}

export default NewsFeedPage
