import React, { Component } from 'react'
import './userCredit.scss'
import { GiWallet } from 'react-icons/gi'
import { IconContext } from 'react-icons'


export default class UserCredit extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      idconsumer: 1,
      credit: -999
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
    render() {
        return (
            <div className="userCredit">
                <div className="wallIconBloc">
                    <WalletIcon />
                    <p>Saldo atual:</p>
                </div>
                <p className="balance">R$ {this.state.credit} </p>
            </div>
        )
    }
}


function WalletIcon() {
    return (
      <IconContext.Provider
        value={{ size: '35px', color: '#2A2AFF' }}
      >
        <a>
          <GiWallet className="wallet"/>
        </a>
      </IconContext.Provider>
    );
  }