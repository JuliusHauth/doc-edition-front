import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const List = ({teiNode, availableRoutes}: TEIProps) => {
    return (
        <Behavior node={teiNode}>
            <ul>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </ul>
        </Behavior>
    )
}

export default List
