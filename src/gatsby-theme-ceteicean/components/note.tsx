import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Note = ({teiNode, availableRoutes}: TEIProps) => {
  const el = teiNode as Element
  const id = `_note_${el.getAttribute("id")}`

    return (
        <Behavior node={teiNode}>
            <span className="note"
                  id={`text${id}`} >
              X
            </span>
        </Behavior>
    )
}

export default Note