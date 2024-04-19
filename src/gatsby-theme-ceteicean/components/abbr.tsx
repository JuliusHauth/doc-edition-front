import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Abbr = ({teiNode, availableRoutes}: TEIProps) => {
    
    return (
        <Behavior node={teiNode}>
            <span className="abbreviation" STYLE="display: none">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default Abbr