import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const P = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element 
    let highlighted
    const styleMap = {
        'center': 'center',
    }
    

    if (!el.getAttribute("rend")===null) {
        return
    } else {
        highlighted = styleMap[el.getAttribute("rend")]
    }
    
    const style = el.getAttribute("style")

    
    
    return (
        <Behavior node={teiNode}>
            <p className={highlighted}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default P