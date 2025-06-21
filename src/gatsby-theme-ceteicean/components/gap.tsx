import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Gap = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    let highlighted
    const styleMap = {
        'ornament': 'ornament',
    }
    

    if (!el.getAttribute("reason")===null) {
        return
    } else {
        highlighted = styleMap[el.getAttribute("reason")]
    }
    
    const style = el.getAttribute("style")

    

    return (
        <Behavior node={teiNode}>
            <p className={highlighted} STYLE={style}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default Gap
