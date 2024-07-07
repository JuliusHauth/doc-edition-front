import React, { useState } from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes, TEINode } from "react-teirouter"
import { Popover } from "@mui/material"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const App = ({teiNode, availableRoutes}: TEIProps) => {
    const [hovered, setHovered] = useState(false)
    const appEl = teiNode as Element
    const main = appEl.querySelector('tei-lem') || appEl.querySelector('tei-rdg')
    const other = appEl.querySelectorAll('tei-rdg')

    console.log(main, other, teiNode)

    if (!main || !other) return null

    return (
        <Behavior node={teiNode}>
            <span className="app">
                <span className='main' onClick={() => setHovered(true)} >
                    <TEINode 
                        teiNode={main} 
                        availableRoutes={availableRoutes} />
                </span>
                <span style={{display: hovered? 'block' : 'none'}}>
                    <TEINodes 
                        teiNodes={other} 
                        availableRoutes={availableRoutes} />
                </span>
            </span>
        </Behavior>
    )
}

export default App
