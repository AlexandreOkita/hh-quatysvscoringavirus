import React, { Component } from 'react'
import Product from '../../../images/product.jpg'
import ConfirmationModal from '../confirmParticipation/ConfirmModal'

import './boxInfo.scss'

export default class boxInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      iddeal: 2, 
      idconsumer: 1,
      people_number: -1,
      people_target: -1,
      original_price: -1,
      price_target: -1,
      prazo: '2020-01-01',
      merchant_name: '',
      image: '',
      modalShow: false
    }

  }

  componentDidMount() {
      this.getInfo(this.state.iddeal);
  }
  
  getInfo =  async (iddeal) => {
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
                  people_number: json.interest_count,
                  people_target: json.interest_target,
                  original_price: json.original_price,
                  price_target: json.target_price,
                  merchant_name: json.merchant_name,
                  prazo: json.prazo.slice(0, 10),
                  image: json.image
              })

          })
      } catch {
        console.log("ERROR")
      }
  }

    showModal = () => {
      this.setState({ modalShow: true })
    }
    
    hideModal = () => {
      this.setState({ modalShow: false });
    }


    render() {
        return (
          <>
            <div className="infoBox">
                <img src={this.state.image} />

                <div className="informations">
                        <p>Pessoas interessadas: {this.state.people_number}</p>
                        <p>Meta de pessoas interessadas: {this.state.people_target}</p>
                        <p>Preço original: R${this.state.original_price}</p>
                        <p>Melhor oferta: R${this.state.price_target}</p>  
                        <p>Cooperativa: {this.state.merchant_name}</p>
                        <p>Prazo: {this.state.prazo}</p>     

                        <button type="button" onClick={this.showModal}>
                            <p className="participationButton">Participar</p>
                        </button>
                </div>
            </div>

            <ConfirmationModal
             show={this.state.modalShow} 
             handleClose={this.hideModal} 
             handleUpdate={this.getInfo}
             price={this.state.price_target}
             deal={this.state.iddeal}
             />
          </>
        )
    }
}
