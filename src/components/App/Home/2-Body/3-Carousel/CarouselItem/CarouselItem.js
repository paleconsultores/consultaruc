//Dependecies
import React from 'react'
//Resources
import './CarouselItem.css'
import imagen1 from './images/img1.jpg'

export function CarouselItem() {
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={imagen1} alt="imagen1"></img>
            <div className='carousel-item__details'>
                <p className='carousel-item__details-title'>Titulo Descriptivo</p>
                <p className='carousel-item__details-subtitle'>2019 16+ 114 minutos </p>
            </div>
        </div>
    );
};