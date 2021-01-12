import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsFeed from '../components/newsfeed'

const NewsFeedPage = () => {
  const data = useStaticQuery(graphql`
    query  {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title,
              date
            }
          fields {
            slug
            }
          }
        }
      }
    }
  `)

  return (<Layout>
    <SEO title="건강뉴스 모음" />
    <NewsFeed />
    <p>메이저 중요한 건강뉴스들을 모았습니다.</p>
  </Layout>)
}

export default NewsFeedPage
