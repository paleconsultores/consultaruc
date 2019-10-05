//Dependencies
import React from "react";

//Resources

import { CardInformation } from "./CardInformation";
import './Information.css';

export function Information(){
    const _cardInformation=[
        {
            type:1,
            title:'Quienes somos',
            descripcion:"Somos una empresa de consultoría y desarrollo de software, dedicada a brindar soluciones a empresas en distintos rubros. Nuestra visión es de mejora continua, trabajamos constantemente para crecer con usted y ofrecerle siempre los mejores avances en cuanto a tecnología, en software nuestras soluciones combinan una operatoria ágil, sencilla y segura con el mayor control de información sobre su negocio, en cuanto a hardware trabajamos con equipos tecnológicos de alto nivel y garantía,las cuales son herramientas que potenciaran su negocio.",
        }
    ]

    return(
        <section className="information">

            <div>
                { _cardInformation.map((information) =>
                <CardInformation
                    type={information.type}
                    title={information.title}
                    descripcion={information.descripcion}
                />
                )}

            </div>

        </section>
    );
}