import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const NewsFeed = () => {
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

  return (
      <>
        <h1>건강뉴스 모음</h1>
        <ul className="infolist">
        { data.allMarkdownRemark.edges.map(({node}) => {
            return (
            <li key={node.fields.slug}>
                <Link to={`/newsfeedpage/${node.fields.slug}`} >
                <div className="post"><span>{node.frontmatter.title} {node.frontmatter.date}</span></div>
                </Link>
            </li>
            )
        }) }
        </ul>
    </>
    )
}

export default NewsFeed
