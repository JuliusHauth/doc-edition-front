import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Rdg = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    return (
        <Behavior node={teiNode}>
            <span className="rdg">
                Reading {el.getAttribute("n")} {el.getAttribute("source")}:<TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes}/><br/>
            </span>
        </Behavior>
    )
}

export default Rdg
