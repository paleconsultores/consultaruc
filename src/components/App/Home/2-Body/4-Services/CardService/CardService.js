//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "./images/ayuda.jpg";
import './CardService.css';

export function CardService(
  { type = 1,
    serviceClass = '', 
    title = 'lorem', 
    img = DEFAULT_IMAGE, 
    children = 'lorem ipsum'
  }) 
{
  if (type == 1) {
    return (
      <div className={"cardService " + serviceClass}>
        <h1 className="title">{title}</h1>
        <p className="description">{children}</p>
        <img className="image" src={img}></img>
      </div>
    );
  } else {
    return (
      <div className={"cardService " + serviceClass}>
        <img className="image" src={img}></img>
        <h1 className="title">{title}</h1>
        <p className="description">{children}</p>
      </div>
    );
  }
}

CardService.propTypes ={
  type: PropTypes.number,
  serviceClass: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string
}