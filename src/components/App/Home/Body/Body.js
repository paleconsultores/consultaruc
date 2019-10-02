import React from 'react';

import redhex from '../../../../images/red7.png';
import redhexs from '../../../../images/red7s.png';

import fondo from '../../../../images/ImgenPrueba1.jpg';
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';
import Section1 from './1-Section/1-Section.js';
import Section2 from './2-Section/2-Section.js';
import './styles.css';

export class Body extends React.Component {
  render() {
    return(
      <div className="contenedor">
        
        <div className="animaciones">
          <img className="ImgHex shadow" src={redhexs}></img>
          <img className="ImgHex" src={redhex}></img>
         
          <img  className="sizeImage" src={fondo}/>
       
         
        </div>
          
         
        <div className="mensaje">
          <p><span>Creamos soluciones a la medida de tu mundo, utilizando tecnologías de ultima generación</span></p>
        </div>
        <div className="about">
          <div className="orden">
            <h1>01</h1>
          </div>
          <div className="info">
              <Section1/>
            
          </div>
        </div>
        <div className="soluciones">
          
          <div className="orden">
            <h1>02</h1>
          </div>
          <div className="info">
            <div className="tiposSoluciones">
                <Section2/>
            </div>
          </div>
        </div>
        <div className="mensaje">
          <p><span>Conoce mas sobre nuestro trabajo</span></p>
        </div>
        <div className="productos">
          <div className="orden">
            <h1>03</h1>
          </div>
          <div className="info">
            <img></img>
            <div className="desc">
              <span><p>Facturacion Electrónica</p></span>
            </div>
          </div>
        </div>
        <div className="servicios">
          <div className="orden">04</div>
          <div className="titulo">
            <h2>Mundo</h2>
            <h1>PALERP</h1>
          </div>
          <div className="info">
            <div className="capacitaciones">
              <h1>Capacitaciones</h1>
              <p>Brindamos capacitaciones, para que se familiaricen con nuestro servicio, absorviendo sus dudas</p>
              <img></img>
            </div>
            <div className="equipoDesarrollo">
              <h1>Equipo de desarrollo</h1>
              <p>Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestión y nuestros productos tecnológicos</p>
              <img></img>
            </div>
            <div className="soporte">
              <h1>Soporte</h1>
              <p>Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada</p>
              <img></img>
            </div>
            <div className="ventas">
              <h1>Ventas</h1>
              <p></p>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}