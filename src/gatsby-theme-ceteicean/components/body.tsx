import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import { JSDOM } from 'jsdom'


interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Body = ({teiNode, availableRoutes}: TEIProps) => {
    const content = teiNode as Element
    const notes = content.querySelectorAll("tei-note")
     
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].getAttribute("id") === null) {
            notes[i].setAttribute("id", i.toString()+"note")
        }
    }
    return (
        <Behavior node={teiNode}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
        </Behavior>
    )
} 

export default Body
