import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Back = ({teiNode, availableRoutes}: TEIProps) => {
    
    return (
        <Behavior node={teiNode}>
            <p className="back">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default Back