import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

export class Home extends React.Component{
  render() {
    return(
      <section className="Home">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </section>
    );
  }
}