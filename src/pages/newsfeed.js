import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <h1>건강뉴스 모음</h1>
    <ol>
      { data.allMarkdownRemark.edges.map(({node}) => {
        return (
          <li key={node.fields.slug}>
            <Link to={`/newsfeed/${node.fields.slug}`} >
              <h2>{node.frontmatter.title}</h2>
              <p> {node.frontmatter.date}</p>
            </Link>
          </li>
        )
      }) }
    </ol>
    <p>메이저 중요한 건강뉴스들을 모았습니다.</p>
  </Layout>)
}

export default NewsFeedPage
