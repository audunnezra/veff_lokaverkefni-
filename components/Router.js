import { Router, Route, hashHistory, Redirect } from 'react-router'
import React from 'react'
import App from './App'
import Arrivals from './Arrivals'
import Departures from './Departures'
import Homepage from './Homepage'

var Rater = React.createClass({
  render: function(){
    return(
      <Router history={hashHistory}>
        <Route path="/#/" component={App}>
          <Redirect from="/" to="/Home" />
          <Route path="/Home" component={Homepage} />
          <Route path="/Arrivals" component={Arrivals} />
          <Route path="/Departures" component={Departures} />
        </Route>
      </Router>
    );
  }
});

export default Rater;
