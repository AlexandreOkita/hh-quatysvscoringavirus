import React, { Component } from 'react'
import './suggestions.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default class Suggestions extends Component {
    
    render() {
        return (
            <div className="suggestions">
            <h1>sugeridos para você:</h1>
            
                <Carousel responsive={responsive} 
                    centerMode={true} 
                    sliderClass="mySlider"
                    itemClass="card"
                    infinite={true}
                    transitionDuration={0}
                    >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Carousel>
            </div>
            
            )
        }
    }
    