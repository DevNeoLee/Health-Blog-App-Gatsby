const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
} 

module.exports.createPages = async ({graphql, actions }) => {
    const { createPage } = actions
    const newsfeedTemplate = path.resolve('./src/templates/newsfeed.js')
    const res = await graphql(`
        query{
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge)=>{
        createPage({
            component: newsfeedTemplate,
            path: `/newsfeedpage/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    const infofeedTemplate = path.resolve('./src/templates/infofeed.js')
    const resInfo = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    resInfo.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: infofeedTemplate,
            path: `/infofeedpage/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}




