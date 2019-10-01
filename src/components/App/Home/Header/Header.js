import React from 'react';

import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <div className="Marca">
            <img className="logoPale" src={logoPale}></img>
          </div>
          <div className="Menu">
            <ul>
              <li>SOBRE</li>
              <li>SOLUCIONES</li>
              <li>CLIENTES</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}