import React from 'react';
import ReactDOM from 'react-dom';
import Buy_Rent from './pages/Buy_Rent.js';
import Sell_Lease from './pages/Sell_Lease.js';
import Home from './pages/Home.js';
import Listings from './pages/Listings.js';
import Account from './pages/Account.js';
import NoMatch from './pages/404page.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './index.css';


const routing = (
  <React.Fragment>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/farmer" component={Buy_Rent} />
        <Route path="/owner" component={Sell_Lease} />
        <Route path="/listings" component={Listings} />
        <Route path="/account" component={Account} />
        
        <Route component={NoMatch} />
      </Switch>
    </Router>
    <Footer />
  </React.Fragment>
)

ReactDOM.render(routing, document.getElementById('root'));