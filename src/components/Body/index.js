import React from 'react';
import redhex from '../../images/red7.png';
import redhexs from '../../images/red7s.png';
import DixSVG from '../../images/Dix.svg';
import { ImgHex, ImgHexS } from './styles';

export class Body extends React.Component {
  render() {
    return(
      <div>
        <ImgHexS src={redhexs}></ImgHexS>
        <ImgHex src={redhex}></ImgHex>
      </div>
    );
  }
}