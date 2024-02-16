import React from 'react'
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
    Tei,
    TeiHeader
  } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
  import Layout from "../../components/layout"
  import Container from "@mui/material/Container"

  

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
    }

    return (
        <Layout>
            
                <Ceteicean pageContext={pageContext} routes={routes} />
            
        </Layout>
    )
  }
 


export default EditionCeteicean
