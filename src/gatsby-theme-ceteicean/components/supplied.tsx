import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Supplied = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    let highlighted
    const styleMap = {
        
    }
    

    if (!el.getAttribute("resp")===null) {
        return
    } else {
        highlighted = styleMap[el.getAttribute("resp")]
    }
    
    const style = el.getAttribute("style")

    

    return (
        <Behavior node={teiNode}>
            <span className={highlighted} STYLE={style}>[
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />]
            </span>
        </Behavior>
    )
}

export default Supplied
