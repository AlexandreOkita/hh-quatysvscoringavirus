import React, { Component } from 'react'
import Header from '../homePage/header/Header/Header'
import BoxInfo from './infoBox/BoxInfo'
import './productPage.scss'

export default class ProductPage extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="productInfo">
                    <h1 className="ProductTitle">Mesas para área de alimentação</h1>
                    <BoxInfo ProductPage="Mesas para área de alimentação" />
                </div>
            </>
        )
    }
}
