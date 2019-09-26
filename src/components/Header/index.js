import React from "react";
import { Em, SpanText, H1, Ul, SpanHMenu, DivHMenu, Nav, DivMarca, HeaderS } from "./styles";

export class Header extends React.Component {
  render() {
    return(
      <HeaderS>
        <Nav>
          <DivMarca>
            <H1>
              <SpanText>
                <Em>P</Em>
                <Em>a</Em>
                <Em>l</Em>
                <Em>e</Em>
              </SpanText>
            </H1>
          </DivMarca>
          <div className="Menu">
            <Ul>
              <li>Empresa</li>
              <li>Soluciones</li>
              <li>Clientes</li>
            </Ul>
          </div>
          <DivHMenu>
            <SpanHMenu></SpanHMenu>
            <SpanHMenu></SpanHMenu>
            <SpanHMenu></SpanHMenu>
          </DivHMenu>
        </Nav>
      </HeaderS>
    );
  }
}