import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/John-Cv.pdf'
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis consectetur nam quis ipsum. Repudiandae aliquid explicabo sequi, a veritatis quod!
                    </p>
                    <a download='' href={CV} className="button button--flex">
                        Download CV  <Files />
                    </a>
                </div>
            </div>
        </section>
    )
}