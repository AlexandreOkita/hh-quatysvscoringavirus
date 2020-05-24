import React, { Component, Children } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import './confirmModal.scss'


export default class ConfirmModal extends Component {
    
    render() {
        const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <button onClick={this.props.handleClose}><BlueClose className="close"/></button>
                    <div className="confirmation">
                        <p>Crédito na carteira: </p>
                        <p>Saldo após confirmação: <br/> <span className="smallSize">(para preço atual de compra)</span></p>

                        <p className="alert">Você pode cancelar sua participação <br/>
                            até 72h antes do prazo de fechamento de compra <br/>
                            do produto
                        </p>

                        <button className="confirmButton" onClick={this.props.handleClose}>Confirmar</button>
                    </div>
                </section>
            </div>

        )
    }
}

function BlueClose() {
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