import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import React from "react"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const L = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element 
    let emptybreak
    let highlighted
    const styleMap = {
        'center': 'center',
        'indent': 'indent',
        'indent-1': 'indent-1',
        'indent-2': 'indent-2',
        'indent-3': 'indent-3',
        'indent-4': 'indent-4',
    }
    

    if (!el.getAttribute("rend")===null) {
        return
    } else {
        highlighted = styleMap[el.getAttribute("rend")]
    }
    
    const style = el.getAttribute("style")

    if (teiNode.childNodes.length == 0){
        emptybreak = "hidden"
    } 
    
    
    return (
        <Behavior node={teiNode}>
            <div className={highlighted} STYLE={style}>
            <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            <br className={emptybreak}/>
            </div>
        </Behavior>
    )
}

export default L