import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React, {useState} from "react"
import { createPortal } from 'react-dom'

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Note = ({teiNode, availableRoutes}: TEIProps) => {
  const el = teiNode as Element
  const id = el.getAttribute("id")
  const textId = `text_${id}`

  const [isHovered, setIsHovered] = useState(false);
  const Background = isHovered ? 'green' : 'white';
  const asideNote = document.getElementById(`aside_${id}`)

  const startHover = () => {
    setIsHovered(true);
    asideNote?.setAttribute("class", "hovered")
}

  const endHover = () => {
    setIsHovered(false);
    asideNote?.setAttribute("class", "")
}

    return (
        <Behavior node={teiNode}>
            <span className="note"
                  id={textId} 
                  onMouseEnter={startHover}
                onMouseLeave={endHover}
                style={{ backgroundColor: Background}}>
              X
            </span>
            {createPortal(
               <p>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>, document.getElementById(`noteSpace`)
            )}
        </Behavior>
    )
}

export default Note