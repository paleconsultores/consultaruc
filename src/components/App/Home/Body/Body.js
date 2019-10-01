import React from 'react';

import redhex from '../../../../images/red7.png';
import redhexs from '../../../../images/red7s.png';
import ayudaImg from '../../../../images/ayuda.jpg';
import './styles.css';

export class Body extends React.Component {
  render() {
    return(
      <div className="contenedor">
        <div className="animaciones">
          <img className="ImgHex shadow" src={redhexs}></img>
          <img className="ImgHex" src={redhex}></img>
        </div>
        <div className="mensaje">
          <p><span>Creamos soluciones a la medida de tu mundo, utilizando tecnologías de ultima generación</span></p>
        </div>
        <div className="about">
          <div className="orden">
            <h1>01</h1>
          </div>
          <div className="info">
            <div className="desc">
              <h3>QUIENES SOMOS</h3>
              <span><p>Somos una empresa de consultoria y desarrollo de software, dedicada a bindar soluciones a empresas en distintos rubros. Nuestra vision es de mejora continua, trabajamos constantemente para crecer con usted y ofrecerle siempre los mejores avances en cuanto a tecnologia, en software nuestras soluciones combinan una operatoria ágil, sencilla y segura con el mayor control de información sobre su negocio, en cuanto a hardware trabajamos con equipos tecnológicos de alto nivel y garantia, las cuales son herramientas que potenciaran su negocio.</p></span>
            </div>
            <img src={ayudaImg}></img>
          </div>
        </div>
        <div className="soluciones">
          <div className="orden">
            <h1>02</h1>
          </div>
          <div className="info">
            <div className="titulo">
              <h2>Nuestras</h2>
              <h1>SOLUCIONES</h1>
            </div>
            <div className="tiposSoluciones">
              <div className="consultoria">
                <img></img>
                <h3>Consultoría</h3>
                <span>Saber mas</span>
              </div>
              <div className="hardwareSoftware">
                <img></img>
                <h3>Hardware y Software</h3>
                <span>Saber mas</span>
              </div>
              <div className="desarrolloSoftware">
                <img></img>
                <h3>Desarrollo de Software</h3>
                <span>Saber mas</span>
              </div>
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
          </div>
        </div>
      </div>
    );
  }
}