import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';

// Landing page
import Dashboard from './app/Dashboard';

// Circles
import Circles from './app/Circles';
import Circle from './app/circles/Circle';

// Meetings
import Meetings from './app/Meetings';
import Tactical from './app/meetings/Tactical';
import Governance from './app/meetings/Governance';

// Static pages
import About from './app/pages/About';

// Error pages
import PageNotFound from './errors/PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/circles" component={Circles}/>
      <Route path="/circle/:circleId" component={Circle}/>
      <Route path="/meetings" component={Meetings}>
        <Route path="/meeting/tactical" component={Tactical}/>
        <Route path="/meeting/governance" component={Governance}/>
      </Route>

      <Route path="/about" component={About}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
