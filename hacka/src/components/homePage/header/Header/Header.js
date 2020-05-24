import React from 'react'
import './header.scss'
import { RiBarChartHorizontalLine } from "react-icons/ri"
import { MdAddShoppingCart } from "react-icons/md"
import { IconContext } from 'react-icons'

import Logo from '../../../../images/logo.png'

import Searchbar from '../Searchbar/Searchbar'
import Categories from '../Categories/Categories'


export default function Header() {
    return (
      <>
        <div className="header">
            <img src={Logo} className="logo"></img>
            <Searchbar />
            <LargeBarsIcon />
            <LargeCartIcon />
        </div>
            <Categories />
      </>
    )
}


function LargeBarsIcon() {
    return (
      <IconContext.Provider
        value={{ size: '35px', color: 'rgba(68, 67, 67, 0.918)' }}
      >
        <a>
          <RiBarChartHorizontalLine />
        </a>
      </IconContext.Provider>
    );
}

function LargeCartIcon() {
    return (
      <IconContext.Provider
        value={{ size: '35px', color: 'rgba(68, 67, 67, 0.918)' }}
      >
        <a>
          <MdAddShoppingCart />
        </a>
      </IconContext.Provider>
    );
}
