import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const DocumentPage = () => {
  return (
    <Layout pageTitle="Documents">
      <h1>Jeannette Bürdes Leben in Briefen und Dokumenten</h1>
      <p>Hier sollte der Index hin und die Textdokumente</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Documents" />

export default DocumentPage