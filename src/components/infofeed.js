import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const InfoFeed = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
        sort: {
        fields:date
        order:DESC
        }
    ){
        nodes {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
            contentful_id
        body {
            json
        }
        }
    }
    }
  `)

  return (
      <>
        <h1>건강정보 모음</h1>
        <ul className="infolist">
        { data.allContentfulBlogPost.nodes.map((node) => {
            return (
            <li key={node.slug}>
                <Link to={`/infofeedpage/${node.slug}`} >
                <div className="post"><span>{node.title} {node.date}</span></div>
                </Link>
            </li>
            )
        }) }
        </ul>
    </>
    )
}

export default InfoFeed
