import React from 'react'
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
    Tei,
    TeiHeader
  } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
  import Layout from "../../components/layout"
import Note from "./note.tsx"
import Lb from "./lb.tsx"
import P from "./p.tsx"
  

interface Props {
    pageContext: {
      name: string
      prefixed: string
      elements: string[]
    },
    location: string
  }
  
  const EditionCeteicean = ({pageContext}: Props ) => {
    
    const routes: Routes = {
        "tei-tei": Tei,
        "tei-teiheader": TeiHeader,
        "tei-note": Note,
        "tei-lb": Lb,
        "tei-p": P,
        "tei-space": P,
    }

    return (
        <Layout>
          <Ceteicean pageContext={pageContext} routes={routes} />    
        </Layout>
    )
  }
 


export default EditionCeteicean
