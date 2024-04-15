import React, {useState} from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'
import './style.css'

import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
    Tei,
    TeiHeader
  } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
  import Layout from "../../components/layout"
import Note from "./note.tsx"
import NoteAside from "./noteAside.tsx"
import Lb from "./lb.tsx"
import P from "./p.tsx"
import Empty from "./empty.tsx"
import Ref from "./ref.tsx"
import Back from "./back.tsx"

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
        "tei-persname": Ref,
        "tei-placename": Ref,
        "tei-orgname": Ref,
        "tei-rs": Ref,
        "tei-settlement": Ref,
        "tei-back": Back
    }

    const routesAside: Routes = {
      "tei-note": NoteAside,
      "tei-teiheader": TeiHeader,
      "tei-tei": Tei,
  }
   
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
  
    const title = data.allEncoding.nodes.find((node: any) => node.parent.name === pageContext.name)?.title
    const test = pageContext.prefixed

    const [checked, setChecked] = React.useState([true, false]);

    const showComments = (event: React.ChangeEvent<HTMLInputElement>) => {
        const notes = document.getElementsByClassName("note")
        const asideNotes = document.getElementsByClassName("asideNote") 
        console.log(event.target.checked)
        if (event.target.checked){
          for (let i = 0; i < notes.length; i++) {
            notes[i].setAttribute("STYLE", "display: inline")
            
          }
        } else {
          for (let i = 0; i < notes.length; i++) {
            notes[i].setAttribute("STYLE", "display: none")
            asideNotes[i]?.setAttribute("STYLE", "display: none")
            console.log(notes[i])
          }
        }
        
        setChecked([event.target.checked, event.target.checked])
    }

    const showOriginal = () => {
      
    }
    


    return (
      <Layout> 
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Container>
              <FormGroup>
                <FormControlLabel control={<Checkbox  checked={checked[1]} onChange={showComments}/>}  label="Kommentare anzeigen" />
                <FormControlLabel control={<Checkbox  />} onChange={showOriginal} label="Original anzeigen" />
              </FormGroup>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container>
              <h3>{title}</h3>
            </Container>
          </Grid>
          <Grid item xs={3}>
            <Container>

            </Container>
          </Grid>
          <Grid item xs={3}>
            <Container>
              <div id="noteSpace"/>
            </Container>
          </Grid>
          <Grid item xs={5}>  
            <Container> 
              <Ceteicean pageContext={pageContext} routes={routes} />
            </Container>
          </Grid>
          <Grid item xs={4}>  
            <Container> 
              <h1>Register!</h1>
            </Container>
          </Grid>
        </Grid>
      </Layout>
    )
  }
 


export default EditionCeteicean
