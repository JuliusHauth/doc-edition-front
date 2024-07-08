import React, {useState, useContext} from 'react'

import { OriginalContext } from "./OriginalContext.js"

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
import Choice from "./choice.tsx"
import Expan from "./expan.tsx"
import Abbr from './abbr.tsx'
import Orig from './orig.tsx'
import Reg from './reg.tsx'
import L from './l.tsx'
import Ex from './ex.tsx'
import Head from './head.tsx'
import Stage from './stage.tsx'
import Front from './front.tsx'
import W from './w.tsx'
import Hi from './hi.tsx'
import App from './app.tsx'
import Rdg from './rdg.tsx'
import Lemma from './lemma.tsx'

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
        "tei-back": Back,
        "tei-choice": Choice,
        "tei-abbr": Abbr,
        "tei-expan": Expan,
        "tei-reg": Reg,
        "tei-orig": Orig,
        "tei-l": L,
        "tei-head": Head,
        "tei-stage": Stage,
        "tei-speaker": P,
        "tei-castitem": L,
        "tei-front": Front,
        "tei-w": W,
        "tei-hi": Hi,
        "tei-app": App,
        "tei-lem": Lemma,
        "tei-rdg": Rdg
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
    const [checkedOrig, setCheckedOrig] = React.useState([true, false]);

    const showComments = (event: React.ChangeEvent<HTMLInputElement>) => {
        const notes = document.getElementsByClassName("note")
        const asideNotes = document.getElementsByClassName("asideNote") 
        const app = document.getElementsByClassName("app")
        

        if (event.target.checked){
          for (let i = 0; i < notes.length; i++) {
            notes[i].setAttribute("STYLE", "display: inline")
          }
          for (let i = 0; i < app.length; i++) {
            app[i].setAttribute("STYLE", "text-decoration: underline dotted")
          }
          
        } else {
          for (let i = 0; i < notes.length; i++) {
            notes[i].setAttribute("STYLE", "display: none")
            asideNotes[i]?.setAttribute("STYLE", "display: none")
            console.log(notes[i])
          }
          for (let i = 0; i < app.length; i++) {
            app[i].setAttribute("STYLE", "text-decoration: none")
          }
        }
        
        setChecked([event.target.checked, event.target.checked])
    }

    let original = useContext(OriginalContext);

    const showOriginal = (event: React.ChangeEvent<HTMLInputElement>) => {
      const choice = document.getElementsByClassName("choice")
      const abbr = document.getElementsByClassName("abbreviation")
      const expan = document.getElementsByClassName("expanded")
      const reg = document.getElementsByClassName("regular")
      const orig = document.getElementsByClassName("original")
      const ex = document.getElementsByClassName("ex")
      
      if (event.target.checked) {
        
        for (let i = 0; i < choice.length; i++) {
          choice[i].setAttribute("STYLE", "text-decoration: underline dotted")
        }
        for (let i = 0; i < abbr.length; i++) {
          abbr[i].setAttribute("STYLE", "display: inline")
        }
        for (let i = 0; i < expan.length; i++) {
          expan[i].setAttribute("STYLE", "display: none")
        }
        for (let i = 0; i < reg.length; i++) {
          reg[i].setAttribute("STYLE", "display: none")
        }
        for (let i = 0; i < orig.length; i++) {
          orig[i].setAttribute("STYLE", "display: inline")
        }
        for (let i = 0; i < ex.length; i++) {
          ex[i].setAttribute("STYLE", "display: none")
        }

      } else {
        for (let i = 0; i < choice.length; i++) {
          choice[i].setAttribute("STYLE", "text-decoration: none")
        }
        for (let i = 0; i < abbr.length; i++) {
          abbr[i].setAttribute("STYLE", "display: none")
        }
        for (let i = 0; i < expan.length; i++) {
          expan[i].setAttribute("STYLE", "display: inline")
        }
        for (let i = 0; i < reg.length; i++) {
          reg[i].setAttribute("STYLE", "display: inline")
        }
        for (let i = 0; i < orig.length; i++) {
          orig[i].setAttribute("STYLE", "display: none")
        }
        for (let i = 0; i < ex.length; i++) {
          ex[i].setAttribute("STYLE", "display: inline")
        }
      }
      setCheckedOrig([event.target.checked, event.target.checked])
    }
    
    


    return (
      <Layout> 
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Container>
              <FormGroup>
                <FormControlLabel control={<Checkbox  checked={checked[1]} onChange={showComments}/>}  label="Kommentare anzeigen" />
                <FormControlLabel control={<Checkbox  checked={checkedOrig[1]} onChange={showOriginal}/>} label="Original anzeigen" />
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
              <Ceteicean pageContext={pageContext} routes={routes} >
                
              </Ceteicean>
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
