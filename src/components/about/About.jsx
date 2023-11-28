import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/sadikahmetozdemirCV.pdf'
import { Files } from './Abouticons'
import { Info } from './Info'

export const About = () => {
    return (
        <section className='about section' id='about'>
            <h1 className="section__title">About Me</h1>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        As a junior frontend developer, I possess an impressive skill set that includes HTML, CSS, JavaScript, React, Tailwind. I excel in designing and maintaining responsive websites that provide a seamless user experience.I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                    <a download='' href={CV} className="button button--flex">
                        Download CV  <Files />
                    </a>
                </div>
            </div>
        </section>
    )
}