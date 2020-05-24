import React, { Component } from 'react'
import Product from '../../../images/product.jpg'
import './boxInfo.scss'

export default class boxInfo extends Component {
    render() {
        return (
            <div className="infoBox">
                <img src={Product} />

                <div className="informations">
                        <p>Pessoas interessadas: {48}</p>
                        <p>Melhor oferta: {'R$30,00'}</p>  
                        <p>Cooperativa: {'z'}</p>     

                        <form action="none">
                            <button type="button" className="participationButton">
                                Participar
                            </button>
                        </form>             
                </div>
            </div>
        )
    }
}
