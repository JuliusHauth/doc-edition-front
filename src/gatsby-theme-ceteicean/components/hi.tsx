import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Hi = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    let highlighted
    const styleMap = {
        'superscript': 'superscript',
        'italic': 'italic',
        'underline': 'underline'
    }
    

    if (!el.getAttribute("rend")===null) {
        return
    } else {
        highlighted = styleMap[el.getAttribute("rend")]
    }
    
    const style = el.getAttribute("style")

    

    return (
        <Behavior node={teiNode}>
            <span className={highlighted} STYLE={style}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
        </Behavior>
    )
}

export default Hi
