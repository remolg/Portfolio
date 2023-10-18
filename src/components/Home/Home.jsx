import React from 'react'
import './Home.css'
import { Social } from './Social'
import { Data } from './Data'


export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>

                    <Data />
                </div>
            </div>
        </section>
    )
}
