//Dependencies
import React from 'react';

//Means
import './styles.css';


class CardSolutionsListItem extends React.Component{
    render(){

        return(
            <div className="container">
               <div className="cardSolutions">

              <div className="cardSolutionsSectionName">
              <img
                  className="cardSolutionsImagen"
                  src={this.props.card.local}/>
            
              </div>

              <div className="cardSolutionsSectionInfo">
                    <h2>{this.props.card.title}</h2>
                    
              </div>

              <div className="cardSolutionsFooter">
                  <button className="sizeButton">Saber mas</button>
              </div>
            </div>
            </div> 
         
        );
    }
    
}

export default class CardSolutions extends React.Component{
    render() {
        return (
          <div>
            <ul>
              {this.props.cards.map(card => {
                return (
                  <li key={card.id}>
                    <CardSolutionsListItem card={card} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
   
}