import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Farmer from './Farmer';
import Owner from './Owner';
 
const routing = (
  <BrowserRouter>
    <div>
      <h3>LocateVF</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/farmer">Farmer</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/farmer" component={Farmer} />
        <Route path="/owner" component={Owner} />
      </Switch>
    </div>
  </BrowserRouter>
)
 
ReactDOM.render(routing, document.getElementById('root'));

/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));*/