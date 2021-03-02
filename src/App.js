import React from 'react';
import './reset.css';

import Home from './components/pages/Home';
import Login from './components/Login/Login';
import ProductsFinal from './components/Products/ProductsFinal';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={ProductsFinal} />
      </Switch>
    </Router>
  );
}

export default App;
