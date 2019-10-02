//Dependencies
import React from 'react';

//Means
import './styles.css';
import Information from './Information/Information';
import ayudaImg from '../../../../../images/ayuda.jpg';
export default class Section1 extends React.Component{

    render(){
        return(
            <div className="container">
                    <div className="grid-container">
                        <div className="grid-item">
                        <Information/>
                        </div>
                        <div className="grid-item">
                        <img className="sizeImagen2" src={ayudaImg}></img>
                        </div>
                    </div>
               
                 
            </div>
        );
    }

}