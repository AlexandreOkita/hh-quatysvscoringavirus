import React, { Component, Children } from 'react'
import './confirmModal.scss'


export default class ConfirmModal extends Component {
    
    render() {
        const showHideClassName = show ? 'modal display-block' : 'modal display-none';

        return (
            <div className="showHideClassname">
                <section className="modal-main">
                    {Children}
                    <button onClick={handleClose}>close</button>
                </section>
            </div>

        )
    }
}
