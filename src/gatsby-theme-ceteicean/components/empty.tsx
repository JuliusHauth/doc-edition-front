import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import React from "react"

interface TEIProps {
    teiNode: Node
}

const empty = ({teiNode}: TEIProps) => {
    
    
    return (
        <Behavior node={teiNode}>
            
        </Behavior>
    )
}

export default empty