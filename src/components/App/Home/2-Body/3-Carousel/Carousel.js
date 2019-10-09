//Dependecies
import React from "react";
//Resources
import { data } from './CarouselData'
import { CarouselCard } from './CarouselCard/CarouselCard'
import { restElement } from "@babel/types";

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    changeProperty = () => {
        var newIndex = this.state.property.index + 1;
        var resetIndex = data.properties.length - 1;
        //console.log(resetIndex)
        if (newIndex > resetIndex) {
            newIndex=0
        }
        this.setState({
            property: data.properties[newIndex]
        })
    }
    componentDidMount() {
        this.startCarousel()
    }
    startCarousel = () => {
        setInterval(()=>{
            this.changeProperty()
        },4000)
    }
    render() {
        const { properties, property } = this.state;
        return (
            <div>
                {/* <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                >Prev</button>
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length - 1}
                >Next</button> */}
                <div >
                    <CarouselCard property={property} />
                </div>
            </div>
        );
    }
}