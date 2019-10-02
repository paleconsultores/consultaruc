//Dependencies
import React from 'react';

//Means
import './styles.css';
import CardSolutions from './CardSolutions/CardSolutions';
import imagen1 from '../../../../../images/consulta.jpg';
import developing from '../../../../../images/DesarrolloSoftware.png';
import imagen2 from '../../../../../images/HardwareySoftware.png';
export default class Section1 extends React.Component{

    state={

        data:[
            {   id:'1',
                local:imagen1,
                title:'Consultoría'
            },
            {   id:'2',
                local:imagen2,
                title:'Harware y Software'
            },
            {   id:'3',
               local:developing,
                title:'Desarrollo de Software'
            }
        ]
    }


    render(){
        return(
                
                <div>
                     <div className="titulo">
                        <h2>Nuestras</h2>
                        <h1>SOLUCIONES</h1>
                    </div>
                    <row className="seccion">
                         <CardSolutions cards={this.state.data}/>
                    </row>
                </div>
               
              
        
        );
    }

}