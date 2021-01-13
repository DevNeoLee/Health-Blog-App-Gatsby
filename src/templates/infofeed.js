import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default({ data }) => {
  const post = data.contentfulBlogPost
  const options = {
      renderNode: {
          "embedded-asset-block": (node) => {
              const alt=node.data.target.fields.title['en-US']
              const url=node.data.target.fields.file['en-US'].url
              return (
                  <img alt={alt} src={url} />
              )
          }
      }
  }
  return (
    <Layout>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        {documentToReactComponents(post.body.json, options)}
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            date(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`