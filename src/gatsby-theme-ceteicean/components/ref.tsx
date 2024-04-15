import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"


interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Ref = ({teiNode, availableRoutes}: TEIProps) => {
    
    const reference = teiNode as Element
    let key 
    if (reference.getAttribute("key") === null) {
        key = reference.getAttribute("ref")
    } else {
        key = reference.getAttribute("key")
    }
    
    
    const style = reference.getAttribute("style")

    
    return (
        <Behavior node={teiNode}>
            <a href={key} target="" STYLE={style}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </a>
            
        </Behavior>
    )
}

export default Ref