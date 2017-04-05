import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Battlepage from './components/Battle/BattlePage';

const notFound = ({location}) => (
  <div>
    <h1><Link to="/">Page not found.</Link></h1>
  </div>
)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/battle" component={Battlepage}/>
      <Route component={notFound}/>
    </Switch>
  </Router>
  ,document.getElementById('root')
);
