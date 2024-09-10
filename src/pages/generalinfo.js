import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const GeneralinfoPage = () => {
  return (
    <Layout pageTitle="Generalinfo">
      <h1>Über Jeannette Bürde</h1>
      <p>Hier steht ein Text zu Bürde, ihr Leben und ihr Wirken</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Generalinfo" />

export default GeneralinfoPage