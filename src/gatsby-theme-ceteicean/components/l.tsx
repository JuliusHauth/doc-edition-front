import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import React from "react"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const L = ({teiNode, availableRoutes}: TEIProps) => {
    let emptybreak
    if (teiNode.childNodes.length == 0){
        emptybreak = "hidden"
    } 
    
    
    return (
        <Behavior node={teiNode}>
            
            <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            <br className={emptybreak}/>
        </Behavior>
    )
}

export default L