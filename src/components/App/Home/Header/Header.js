import React from "react";

import './styles.css'

export class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <div>
            <h1>
              <span className="Brand">
                <em>P</em>
                <em>a</em>
                <em>l</em>
                <em>e</em>
              </span>
            </h1>
          </div>
          <div className="Menu">
            <ul>
              <li>Empresa</li>
              <li>Soluciones</li>
              <li>Clientes</li>
            </ul>
          </div>
          {/* <div className="BurgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
        </nav>
      </header>
    );
  }
}