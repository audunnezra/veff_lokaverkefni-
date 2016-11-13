import React from 'react'
import { render } from 'react-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Departures from './Departures'
import Arrivals from './Arrivals'

var App = React.createClass({
  render: function(){

    return (
      <div id="container">
        <Navbar />
        <Departures />
        <Arrivals />
        <Footer />
      </div>
    )
  }
});

export default App;
