//Dependecies
import React from "react";
//Resources
import './Carousel.css'

const Carousel = ({children}) => {
    return(
        <section>
            <div className="carousel_container">
                {children}
            </div>
        </section>
    );
}
export default Carousel;
