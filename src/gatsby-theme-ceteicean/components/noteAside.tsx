import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const noteAside = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    const id = `_note_${el.getAttribute("id")}`

    return (
        <Behavior node={teiNode}>
            <p id={`aside${id}`} >
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default noteAside