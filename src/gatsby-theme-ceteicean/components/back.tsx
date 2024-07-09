import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"
import Button from '@mui/material/Button';

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

let backShown = false

const showBack = () => {
    const back = document.getElementsByClassName("back")

    if (backShown){
        for (let i = 0; i < back.length; i++) {
            back[i].setAttribute("STYLE", "display: none")
          }
    }else {
        for (let i = 0; i < back.length; i++) {
            back[i].setAttribute("STYLE", "display: block")
          }
    }
    backShown = !backShown
}

const Back = ({teiNode, availableRoutes}: TEIProps) => {
    
    return (
        <Behavior node={teiNode}>
            <br/>
                <Button className="contextButton"
                    onClick={showBack}
                    variant="contained"
                    color="success">
                    Back anzeigen
                </Button>
            <p className="back"
                STYLE="display: none">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default Back