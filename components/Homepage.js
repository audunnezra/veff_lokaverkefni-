import React from 'react'
import {Col} from 'react-bootstrap'


var ws = {backgroundColor:'#3c3c3c', color:'white', "height":'400rem', opacity:0 }
var mid = {backgroundColor:'#7f7f7f', color:'white', "height":'400rem'}
var container = {"height":"100wh"}

var Homepage = React.createClass({
  render: function(){
    return (
      <div id="homepage" style={container}>
        <Col xsHidden smHidden md={1} lg={2} style={ws}>footerItem</Col>
        <Col xs={12} sm={12} md={10} lg={8} style={mid}>footerItem2</Col>
        <Col xsHidden smHidden md={1} lg={2} style={ws}>footerItem3</Col>
      </div>
    );
  }
});


export default Homepage;
