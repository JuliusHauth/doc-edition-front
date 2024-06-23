import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Hi = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    let highlighted

    if (el.getAttribute("rend") === "superscript"){
        highlighted = "superscript"
    }
    
    if (el.getAttribute("rend") === "italic"){
        highlighted = "italic"
    }

    if (el.getAttribute("rend") === "underline"){
        highlighted = "underline"
    }

    return (
        <Behavior node={teiNode}>
            <span className={highlighted}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default Hi
