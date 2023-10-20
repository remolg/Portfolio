import React from 'react'
import './skills.css'
import { Frontend } from './Frontend'

export const Skills = () => {
    return (
        <section className="skill section" id='skills'>
            <h1 className="section__title">Skills</h1>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <Frontend />
            </div>
        </section>
    )
}
