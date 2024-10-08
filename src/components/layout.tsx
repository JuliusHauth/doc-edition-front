import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'



interface Props {
    location?: string
    children?: React.ReactNode
}

const Main = styled.div(() => ({
  minHeight: "65vh",
  "& h2, & h3": {
      paddingBottom: '1rem'
  },
  padding: '1rem',
  fontSize: 'large',
}))

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  return (
   <div>
      <Header title={title}/>
      
      <Main>{children}</Main> 
      <Footer/>
   </div> )
}

export default Layout