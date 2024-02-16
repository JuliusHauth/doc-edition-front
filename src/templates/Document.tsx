import React from 'react'
import Layout from '../components/layout'
import { DOMParser } from 'xmldom'

function Document({ pageContext }: any) {
    const { encoding } = pageContext

    console.log({encoding})
    // const dom = new DOMParser().parseFromString(document.rawXml!, 'application/xml')

    return (
        <Layout>
           {encoding.title}
        </Layout>
    )
}

export default Document