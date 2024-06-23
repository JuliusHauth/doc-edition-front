import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const App = ({teiNode, availableRoutes}: TEIProps) => {
    return (
        <Behavior node={teiNode}>
            <span className="app">
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            
            </span>
        </Behavior>
    )
}

export default App
