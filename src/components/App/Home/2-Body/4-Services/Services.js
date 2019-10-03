//Dependencies
import React from "react";

//Resources
import { CardService } from "./CardService";
import './Services.css';

export function Services() {
  return (
    <section className="Services">
      <div className="title">
        <h2>Mundo</h2>
        <h1>Palerp</h1>
      </div>
      <div className="info">
        <CardService
          type={1}
          serviceClass="training"
          title="Capacitaciones"
        >
          Brindamos capacitaciones, para que se familiaricen con nuestro servicio, absorviendo sus dudas
        </CardService>
        <CardService
          type={2}
          serviceClass="devTeam"
          title="Equipo de desarrollo"
        >
          Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestión y nuestros 
          productos tecnológicos
        </CardService>
        <CardService
          type={1}
          serviceClass="support"
          title="Soporte"
        >
          Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada
        </CardService>
        <CardService
          type={2}
          serviceClass="sales"
          title="Ventas"
        ></CardService>
      </div>
    </section>
  );
}