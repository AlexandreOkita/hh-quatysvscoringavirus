import React from 'react';
import Header from'./components/header/Header/Header'
import TopCategories from './components/topCategories/TopCategories'
import Suggestions from './components/suggestions/Suggestions'

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
