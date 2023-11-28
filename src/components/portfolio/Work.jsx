import React from 'react'
import './work.css'
import { Works } from './Works'

export const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className='section__subtitle'>Most recent works</span>
            <Works />
        </section>
    )
}
