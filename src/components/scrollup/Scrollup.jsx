import React, { useEffect, useState } from 'react'
import './scrollup.css'

export const Scrollup = () => {
    const [showScroll, setShowScroll] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 560) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])


    return (
        <a href="#" className={`scrollup ${showScroll ? `show-scroll` : ''}`} onClick={scrollTop}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}
