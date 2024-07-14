import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const ListItem = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element

    if (el.parentElement.tagName !== "tei-list") return
    return (
        <Behavior node={teiNode}>
            <li>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </li>
        </Behavior>
    )
}

export default ListItem
