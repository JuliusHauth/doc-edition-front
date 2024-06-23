import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"
import Button from '@mui/material/Button';

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

let frontShown = false

const showFront = () => {
    const front = document.getElementsByClassName("front")

    if (frontShown){
        for (let i = 0; i < front.length; i++) {
            front[i].setAttribute("STYLE", "display: none")
          }
    }else {
        for (let i = 0; i < front.length; i++) {
            front[i].setAttribute("STYLE", "display: block")
          }
    }
    frontShown = !frontShown
}

const Front = ({teiNode, availableRoutes}: TEIProps) => {
    
    return (
        <Behavior node={teiNode}>
            <Button 
                onClick={showFront}
                variant="contained"
                color="success">
                Front anzeigen
            </Button>
            <p 
                className="front"
                STYLE="display: none"
                >
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default Front