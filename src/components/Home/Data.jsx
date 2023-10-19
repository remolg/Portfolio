import React from 'react'
import { Hand, Hello } from './Homeicons'

export const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Sadık Ahmet Özdemir
                <Hand />
            </h1>
            <h3 className="home__subtitle">Jr. Front-end Developer</h3>
            <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi vero totam asperiores, magni libero adipisci..</p>

            <a href="#contact" className="button button--flex">
                say hello
                <Hello />
            </a>
        </div>
    )
}
