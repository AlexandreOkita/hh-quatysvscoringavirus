import React, { Component } from 'react'
import './slider.scss'


export default class Slider extends Component {
    onInput() {
        var input = document.getElementById("typeinp");
        var currentVal = input.value;
        this.setState({
          value: currentVal
        })
    }
    
    render() {
        return (
            <div className="sliderContainer">
                <input className="slideer" id="typeinp" type="range" min="0" max="5" step="1" defaultValue="3" onInput={this.onInput.bind(this)}/>
                <div className="textBlock">
                    <p className="plat">Nossa plataforma</p>
                    <p className="inst">Instituições de caridade</p>
                </div>
            </div>
        )
    }
}
