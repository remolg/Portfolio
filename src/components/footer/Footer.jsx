import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Remolg</h1>

                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/remolg_/" className="footer__social-link" target='_blank'>
                        <i className='uil uil-instagram'></i>
                    </a>
                    <a href="https://github.com/remolg" className="footer__social-link" target='_blank'>
                        <i className='uil uil-github-alt'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
