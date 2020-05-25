import React, { Component } from 'react'
import Header from '../homePage/header/Header/Header'
import BoxInfo from './infoBox/BoxInfo'
import './productPage.scss'

export default class ProductPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          iddeal: 2,
          product: ''
        }
      }

      componentDidMount() {
        this.getInfo(this.state.iddeal);
    }
    
    async getInfo(iddeal) {
      try {
        console.log('DEBUG TEST');
        await fetch( 'http://34.95.183.232/hack/deal/getinfo'+'?iddeal='+this.state.iddeal.toString(), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(res => res.json())
            .then(json => {
                json = json.deal;
                console.log('DEBUG:', json);
                console.log('TARGET_PRICE', json.target_price);
                this.setState({
                    product: json.product_name
                })
            })
        } catch {
          console.log("ERROR PRODUCT")
        }
    }

    render() {
        return (
            <>
                <Header />

                <div className="productInfo">
                    <h1 className="ProductTitle">{this.state.product}</h1>
                    <BoxInfo ProductPage="Mesas para área de alimentação" />
                </div>
            </>
        )
    }
}
