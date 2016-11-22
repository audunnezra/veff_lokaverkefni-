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
          {this.props.children}
        <Footer />
      </div>
    )
  }
});

export default App;
