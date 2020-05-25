import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//import your component (see SignUp as example)
import Signup from './screens/login/Signup';

import './index.scss';
import App from './screens/App';
import ProductPage from './components/productPage/ProductPage'

//every path is the url, our initial screen will be Signup 

const routing = (
  <Router>
    <div>
      <Route path = "/login" component= {Signup} />
      <Route exact path = "/" component = {App}/>
      <Route path = "/productView:id" component = {ProductPage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
