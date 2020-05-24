import React, { Component } from 'react'
import Product from '../../../images/product.jpg'
import ConfirmationModal from '../confirmParticipation/ConfirmModal'

import './boxInfo.scss'

export default class boxInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      iddeal: 1, 
      idconsumer: 1,
      people_number: -1,
      people_target: -1,
      original_price: -1,
      price_target: -1,
      prazo: '2020-01-01',
      modalShow: false
    }
  }

  componentDidMount() {
      this.getInfo();
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
                this.setState({
                    people_number: json.interest_count || 40,
                    people_target: json.interest_target || 60,
                    original_price: json.original_price || 'R$50,00',
                    price_target: json.target_price || 'R$30,00',
                    prazo: json.prazo || '2020-05-01'
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
                <img src={Product} />

                <div className="informations">
                        <p>Pessoas interessadas: {this.state.people_number}</p>
                        <p>Meta de pessoas interessadas: {this.state.people_target}</p>
                        <p>Preço original: {this.state.original_price}</p>
                        <p>Melhor oferta: {this.state.target_price}</p>  
                        <p>Cooperativa: {'z'}</p>
                        <p>Prazo: {this.state.prazo}</p>     

                        <button type="button" onClick={this.showModal}>
                            <p className="participationButton">Participar</p>
                        </button>
                </div>
            </div>

            <ConfirmationModal show={this.state.modalShow} handleClose={this.hideModal}>
              <p>MOdal</p>
              <p>MOdal</p>
            </ConfirmationModal>
          </>
        )
    }
}
