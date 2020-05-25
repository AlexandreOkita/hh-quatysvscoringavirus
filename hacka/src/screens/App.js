import React from 'react';
import Header from'../components/homePage/header/Header/Header'
import TopCategories from '../components/homePage/topCategories/TopCategories'
import Suggestions from '../components/homePage/suggestions/Suggestions'
import Highlight from '../components/homePage/highlights/Highlight'

function App() {
  return (
    <>
      <Header />
      <TopCategories />
      <Suggestions />
      <Highlight />
    </>
  );
}

export default App;
