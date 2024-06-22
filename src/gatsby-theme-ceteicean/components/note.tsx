import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React, { useContext} from "react"
import { createPortal } from 'react-dom'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { OriginalContext } from "./OriginalContext.js"


interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Note = ({teiNode, availableRoutes}: TEIProps) => {
  const el = teiNode as Element
  const id = el.getAttribute("id")
  
  
  
  const textId = `text_${id}`

  



  const showAsideNote = () => {
    const asideNote = document.getElementById(`aside_${id}`)
    console.log("rest27")
    console.log(asideNote?.getAttribute("STYLE"))
    if (asideNote?.getAttribute("STYLE") === "display: none") {
      asideNote?.setAttribute("STYLE", "display: block")
      
    } else {
      asideNote?.setAttribute("STYLE", "display: none")
      
    }

  }

  const closeAsideNote = () => {
    const asideNote = document.getElementById(`aside_${id}`)
    asideNote?.setAttribute("STYLE", "display: none") 
  }
  const original = useContext(OriginalContext)
  console.log(original)

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
              <div className="asideNote" id={`aside_${id}`} STYLE="display: none"> 
               <p>
                <div STYLE="text-align: end">
               <IconButton aria-label="Close" onClick={closeAsideNote} >
                  <CloseIcon />
               </IconButton> <br />
               </div>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
            </div>, document.getElementById('noteSpace')
            )}
        </Behavior>
        
    )
}

export default Note