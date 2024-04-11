import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import React, { useState } from "react"

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}

const noteAside = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element
    const id = el.getAttribute("id")
    const asideId = `aside_${id}`

    const [isHovered, setIsHovered] = useState(false);
    const Background = isHovered ? 'green' : 'white'; 
    const textNote = document.getElementById(`text_${id}`)

    console.log({textNote})
    console.log(`text_${id}`)

    const startHover = () => {
        setIsHovered(true);
        textNote?.setAttribute("class", "hovered")
    }

    const endHover = () => {
        setIsHovered(false);
        textNote?.setAttribute("class", "note")
    }

    

    return (
        <Behavior node={teiNode}>
            <p id={asideId} 
                onMouseEnter={startHover}
                onMouseLeave={endHover}
                style={{ backgroundColor: Background}}>
                <TEINodes 
                teiNodes={teiNode.childNodes} 
                availableRoutes={availableRoutes} />
            </p>
        </Behavior>
    )
}

export default noteAside