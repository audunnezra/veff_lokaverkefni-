import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import App from './App'
import Arrivals from './Arrivals'

var Rater = React.createClass({
render: function(){
  return(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/Arrivals" component={Arrivals}/>
    </Route>
  </Router>
  );
}
});

export default Rater;
