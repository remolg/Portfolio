import React from 'react'

export const Worksitems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className='work__title'>{item.title}</h3>
            <div className="work__button_flex">
                <a href={item.github} className="work__button" target='_blank'>
                    Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.link} className="work__button" target='_blank'>
                    Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div>
    )
}
