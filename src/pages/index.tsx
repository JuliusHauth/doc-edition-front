import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'


interface Encoding {
  title: string,
  path: string
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query {
          allEncoding {
            nodes {
              title
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
    `)  
      
    const encoding: Encoding[] = data.allEncoding.nodes.map((node: any) => ({
      title: node.title,
      path: node.parent.name
    } as Encoding));


  return (
    <Layout>
      <h1>Here the index of Test Encodings will be shown</h1>
      {encoding.map((encoding, i) => (
        <Link to={encoding.path}>{encoding.title}</Link>
      ))}  
    </Layout>
  )
}


export default IndexPage