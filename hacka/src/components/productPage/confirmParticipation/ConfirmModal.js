import React, { Component} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import './confirmModal.scss'


export default class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      iddeal: 1, 
      idconsumer: 1,
      credit: -999,
    }
  }

  componentDidMount(){
    this.creditInfo();

  }

  creditInfo = async () => {
    try {
      await fetch( 'http://34.95.183.232/hack/consumer/credit'+'?idconsumer='+this.state.idconsumer.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(json => {
        this.setState({credit: json.consumer.credit});
      })
  } catch{
    console.log('error credit info')
  }
}

  participate = async function (iddeal, idconsumer) {
    try {
      await fetch( 'http://34.95.183.232/hack/deal/participate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iddeal: iddeal,
          idconsumer: idconsumer
        })
      }).then(res => res.json())
        .then(json => {
            json = json.deal;
        })
    } catch(error) {
      console.log("ERROR", error);
    }
}

  buyProduct = async() => {
    try{
      await fetch( 'http://34.95.183.232/hack/consumer/wallet', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          diffcredit: -1*this.props.price,
          id: this.state.idconsumer
        })
      })
    } catch{
      console.log('buy error');
    }
  }

confirmButton = () => {
  console.log('TESTEE')
  this.participate(this.state.iddeal, this.state.idconsumer);
  this.buyProduct();
  this.props.update();
  this.props.handleClose();
};

render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={this.props.handleClose}><BlueClose className="close"/></button>
                <div className="confirmation">
                    <p>Crédito na carteira: {this.state.credit}</p>
    <p>Saldo após confirmação: {this.state.credit - this.props.price}({this.state.credit} - {this.props.price}) <br/> <span className="smallSize">(para preço atual de compra)</span></p>

                    <p className="alert">Você pode cancelar sua participação <br/>
                        até 72h antes do prazo de fechamento de compra <br/>
                        do produto
                    </p>

                    <button className="confirmButton" onClick={this.confirmButton}>Confirmar</button>
                </div>
            </section>
        </div>
    )
}
}

function BlueClose(){
  return (
    <IconContext.Provider
      value={{ size: '30px', color: 'rgb(0, 71, 252)' }}
    >
      <a>
        <AiOutlineCloseCircle />
      </a>
    </IconContext.Provider>
  );
}