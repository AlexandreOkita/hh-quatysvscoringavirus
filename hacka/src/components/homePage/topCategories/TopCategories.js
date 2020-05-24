import React, { Component } from 'react'
import './topCategories.scss'

export default class TopCategories extends Component {
    render() {
        return (
            <div className="topCategories">
                <div className="blueBox">
                    <p className="topTitle"> TOP Categorias</p>
                    
                    <hr className="bar1"/>
                    <hr className="bar2"/>
                </div>

                <div className="absolutePosCardBlock">
                    <div className="categoriesCards">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
            </div>
        )
    }
}
