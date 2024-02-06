import React from "react"
import './header.css'

interface Props {
    title: string
}

const Header = ({ title}: Props) => {
    return (
        <div className="header">
            <a href="/">{title}</a>
        </div>
    )
}

export default Header