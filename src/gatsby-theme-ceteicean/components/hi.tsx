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
        'underline': 'underline',
        'latintype': 'latintype',
        'gothic': 'gothic',
        'indent': 'indentation',
        'indent-1': 'indentation-1',
        'indent-2': 'indentation-2',
        'indent-3': 'indentation-3',
        'indent-4': 'indentation-4',
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
