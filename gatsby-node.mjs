import { JSDOM } from 'jsdom'
import path from 'path'

export const shouldOnCreateNode = ({ node }) => {
    return [`application/xml`, `text/xml`].includes(node.internal.mediaType)
}

export const onCreateNode = async ({
    node,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
}) => {
    const { createNode, createParentChildLink } = actions

    const rawXml = await loadNodeContent(node)
    const { document } = (new JSDOM(rawXml)).window

    const title = document.querySelector('title')?.innerHTML || '[no title]'

    const obj = {
        title,
        rawXml,
        id: createNodeId(`${node.id} >>> XML`),
        children: [],
        parent: node.id,
        internal: {
            contentDigest: createContentDigest({ rawXml }),
            type: `encoding`
        }
    }

    await createNode(obj)
    createParentChildLink({ parent: node, child: obj })
}

export const createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    const result = await graphql(
      `
        {
          allCetei {
            nodes {
              prefixed
              elements
            }
          }
        }
      `
    )
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    const teiEncoding = path.resolve(`src/templates/Document.tsx`)
    result.data.allEncoding.edges.forEach(({ node }) => {
      const path = node.parent.name
      createPage({
        path,
        component: teiEncoding,
        context: {
          encoding: node,
        },
      })
    })
  }