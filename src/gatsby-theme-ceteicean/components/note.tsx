import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React, {useState, useEffect} from "react"
import { createPortal } from 'react-dom'


interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  let active = false

const Note = ({teiNode, availableRoutes}: TEIProps) => {
  const el = teiNode as Element
  const id = el.getAttribute("id")
  const textId = `text_${id}`

  const asideNote = document.getElementById(`aside_${id}`)



  const showAsideNote = () => {
    console.log("test")
    
    if (active) {
      asideNote?.setAttribute("STYLE", "display: block")
      active = false
    } else {
      asideNote?.setAttribute("STYLE", "display: none")
      active = true
    }

  }


    return (
        <Behavior node={teiNode}>
            <span className="note"
                  id={textId} 
                  STYLE="display: none"
                  onClick={showAsideNote}
                  >
                  
              *
            </span>
             {document.getElementById('noteSpace') && createPortal(
               <p id={`aside_${id}`} className="asideNote">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>, document.getElementById('noteSpace')
            )}
        </Behavior>
    )
}

export default Note