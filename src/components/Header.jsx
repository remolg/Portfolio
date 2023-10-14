import React from 'react'
import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <nav className='nav container'>
                <a href="index.html" className="nav__logo">Logo</a>
                <div className="nav__menu">
                </div>
            </nav>
        </header>
    )
}
