import React, { Component } from 'react'
import './highlights.scss'
import {Link} from 'react-router-dom'
import Product from '../../../images/product.jpg'
import { AiFillFire } from 'react-icons/ai'
import { IconContext } from 'react-icons'


export default class Highlight extends Component {
    render() {
        return (
            <>
                <div className="highlightBox">
                    <Link link to="productView..1"> 
                        <div  className="highlightProduct">
                            <img src={Product} alt=""/>

                            <div className="textBlock">
                                <p className="fire">FIRE MOOSi <FireIcon/> </p> 
                                <p>Mesas para restaurantes e <br/>
                                praças de alimentação</p>
                            </div>
                        </div>
                    </Link>         

                    <div className="highlight"></div>
                </div>
                <div className="limbo"></div>
            </>
        )
    }
}

function FireIcon() {
    return (
      <IconContext.Provider
        value={{ size: '35px', color: 'red' }}
      >
        <a>
          <AiFillFire />
        </a>
      </IconContext.Provider>
    );
}
