import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Stage = ({teiNode, availableRoutes}: TEIProps) => {
    const p = teiNode
    
    return (
        <Behavior node={teiNode}>
            <i>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </i>
            <br/>
        </Behavior>
    )
}

export default Stage