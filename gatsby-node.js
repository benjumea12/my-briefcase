const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // File nodes from src/data/projects
  if (node.internal.type === `File`) {

    const res = createFilePath({ node, getNode, basePath: `pages` }).split('.')
    const slug = `${res[0]}/`
    const project = res[0].split('/')[1]

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `project`,
      value: project,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allFile {
        edges {
          node {
            fields {
              slug
              project
            }
          }
        }
      }
    }
  `)

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/template-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        project: node.fields.project,
      },
    })
  })
}
