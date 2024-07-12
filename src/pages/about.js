import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <h1>About this project</h1>
      <p>Write your project description here in HTML</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage