import React from "react"
import './header.css'

interface Props {
    title: string
}

const Header = ({ title}: Props) => {
    return (
        <div className="header">
            <a className="siteTitle" href="/">{title}</a>
            <a className="navLink" href="/eguidelines">Editorial Guidelines</a>
            <a className="navLink" href="/about">About</a>
        </div>
    )
}

export default Header