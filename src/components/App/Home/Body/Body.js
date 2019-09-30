import React from 'react';
import redhex from '../../../../images/red7.png';
import redhexs from '../../../../images/red7s.png';
import './styles.css'

export class Body extends React.Component {
  render() {
    return(
      <div>
        <img className="ImgHex shadow" src={redhexs}></img>
        <img className="ImgHex" src={redhex}></img>
      </div>
    );
  }
}