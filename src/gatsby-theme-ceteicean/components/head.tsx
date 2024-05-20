import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import React from "react"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Head = ({teiNode, availableRoutes}: TEIProps) => {
 
    
    return (
        <Behavior node={teiNode}>
            <p>
                <h4>
                    <TEINodes 
                        teiNodes={teiNode.childNodes} 
                        availableRoutes={availableRoutes} />
                </h4>
            </p>   
        </Behavior>
    )
}

export default Head