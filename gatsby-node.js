const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPost.edges.map(({ node: post }) => {
        createPage({
          path: `posts/${post.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: post.slug,
          },
        })
      })
      resolve()
    })
  })
}
