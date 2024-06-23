import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Ex = ({teiNode, availableRoutes}: TEIProps) => {
    return (
        <Behavior node={teiNode}>
            <span className="ex">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default Ex
