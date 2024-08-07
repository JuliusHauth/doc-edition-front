import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const Reg = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    
    if (Number(el.getAttribute("regN")) !== 0) return

    return (
        <Behavior node={teiNode}>
            <span className="regular" >
                <TEINodes 
                teiNodes={el.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default  Reg