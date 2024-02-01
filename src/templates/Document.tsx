import React from 'react'
import Layout from '../components/layout'
import { DOMParser } from 'xmldom'

function Document({ pageContext }: any) {
    const { document } = pageContext

    const dom = new DOMParser().parseFromString(document.rawXml!, 'application/xml')

    return (
        <Layout pageTitle={document.title}>
            <p></p>
        </Layout>
    )
}