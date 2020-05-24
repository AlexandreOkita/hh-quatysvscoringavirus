import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
import * as serviceWorker from './serviceWorker';

//import your component (see SignUp as example)

import Signup from './screens/Signup';

//every path is the url, our initial screen will be Signup 

const routing = (
  <Router>
    <div>
      <Route path="/" component={Signup} />
    </div>
  </Router>
)

<ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
