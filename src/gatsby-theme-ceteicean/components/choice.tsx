import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Choice = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    const reg = el.querySelectorAll("tei-reg")

    if (reg[1]){
        for (let i = 0; i < reg.length; i++) {
            reg[i].setAttribute("regN", i.toString())
        }
    }

    return (
        <Behavior node={teiNode}>
            <span className="choice">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default Choice
