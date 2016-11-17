import React from 'react'
import NavBar from './NavBar'
import JQuery from 'jquery'

var Header = React.createClass({

  render: function(){
    return(
      <div id="container">
        <NavBar />
      </div>
    )
  }

});

export default Header;
