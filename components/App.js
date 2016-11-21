import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

var App = React.createClass({
  render: function(){

    return (
      <div id="container">
        <Navbar />
          <Link to="/Arrivals">arrivals</Link>
        <Footer />
      </div>
    )
  }
});

export default App;
