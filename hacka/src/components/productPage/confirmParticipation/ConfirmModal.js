import React, { Component, Children } from 'react'
import './confirmModal.scss'


export default class ConfirmModal extends Component {
    
    render() {
        const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {this.props.Children}
                    <button onClick={this.props.handleClose}>close</button>
                </section>
            </div>

        )
    }
}
