import React from 'react'
import { Hand, Hello } from './Homeicons'

export const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Sadık Ahmet Özdemir
                <Hand />
            </h1>
            <h3 className="home__subtitle">Front-end Developer</h3>
            <p className="home__description">Hi, I'm Sadık Ahmet Özdemir. <br /> A passionate Front-end Developer based in Türkiye, Istanbul</p>

            <a href="#contact" className="button button--flex">
                say hello
                <Hello />
            </a>
        </div>
    )
}
