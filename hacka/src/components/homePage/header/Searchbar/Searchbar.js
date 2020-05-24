import React, { Component } from 'react';
import { IoMdRadioButtonOn, IoMdSearch } from "react-icons/io";
import './searchbar.scss';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className="searchbar">
        <input
          className="search"
          placeholder="Pesquisar produto..."
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Pesquisar produto..."}
        ></input>

      </nav >
    )
  }
}
