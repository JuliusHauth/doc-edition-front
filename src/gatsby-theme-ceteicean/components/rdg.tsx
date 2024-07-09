import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Rdg = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    let context = ""
    let condBreak 
    
    if (el.getAttribute("rdgN") !== "0"){
        context =  "Reading " + el.getAttribute('n') + " " + el.getAttribute('source') + ":"
        condBreak = <br/>
    } 
    return (
        <Behavior node={teiNode}>
            <span className="rdg">
                {condBreak}{context}<TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes}/> 
            </span>
        </Behavior>
    )
}

export default Rdg
