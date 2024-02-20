import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import React from "react"

interface TEIProps {
    teiNode: Node
}

const Lb = ({teiNode}: TEIProps) => {
    const lb = teiNode
    
    return (
        <Behavior node={teiNode}>
            <br/>
        </Behavior>
    )
}

export default Lb