import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Seo from '../components/seo'


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
      <h1>Jeannette Bürdes Leben in Briefen und Dokumenten</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Verfügbare Textdokumente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {encoding.map((encoding, i) => (
              <TableRow key={`encoding_${i}`}>
                <TableCell>
                  <Link to={encoding.path}>{encoding.title}</Link>
                </TableCell>
              </TableRow>
              ))}  
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="Start" />

export default IndexPage