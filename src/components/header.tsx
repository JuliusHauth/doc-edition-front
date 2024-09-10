import React from "react"
import './header.css'

interface Props {
    title: string
}

const Header = ({ title}: Props) => {
    return (
        <div className="header">
            <a className="siteTitle" href="/">{title}</a>
            <a className="navLink" href="/preface">Vorwort</a>
            <a className="navLink" href="/generalinfo">Jeannette Bürde</a>
            <a className="navLink" href="/documents">Textdokumente</a>
            <a className="navLink" href="/eguidelines">Editionsrichtlinien</a>
            <a className="navLink" href="/about">Über das Projekt</a>
        </div>
    )
}

export default Header