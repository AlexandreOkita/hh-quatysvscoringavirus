import React from 'react';
import Header from'./components/header/Header/Header'
import TopCategories from './components/topCategories/TopCategories'
import Suggestions from './components/suggestions/Suggestions'

import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <TopCategories />
      <Suggestions />
    </>
  );
}

export default App;
