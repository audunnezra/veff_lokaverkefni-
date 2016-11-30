import React from 'react'
import {Col} from 'react-bootstrap'


var ws = {backgroundColor:'#3c3c3c', color:'white', "height":'200rem', opacity:0 }
var mid = {color:'white', "height":'200rem', backgroundColor: '#262b33'}
var container = {"height":"100wh",}

var hgb = {"height":'200rem', textAlign:'center'}
var gbh = {"height":'200rem', textAlign:'center'}
var bgh = {"height":'200rem', textAlign:'center'}
var sizer = {"height":'33.3333333333rem'}

var welcome = { fontFamily:'Didot LT STD', fontSize:'68px' }

var Homepage = React.createClass({
  render: function(){
    return (
      <div id="homepage" style={container}>
        <Col xsHidden smHidden md={1} lg={2} style={ws}>footerItem</Col>
        <Col xs={12} sm={12} md={10} lg={8} style={mid}>
            <Col xs={4} sm={4} md={2.5} lg={2.66666667} style={hgb}>
              <div style={sizer}></div>
              <div style={sizer}>doot</div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
            </Col>
            <Col xs={4} sm={4} md={2.5} lg={2.66666667} style={gbh}>
              <div style={sizer}><h2 style={welcome}>Welcome</h2></div>
              <div style={sizer}>doot</div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
            </Col>
            <Col xs={4} sm={4} md={2.5} lg={2.66666667} style={bgh}>
              <div style={sizer}></div>
              <div style={sizer}>doot</div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
              <div style={sizer}></div>
            </Col>
        </Col>
        <Col xsHidden smHidden md={1} lg={2} style={ws}>footerItem3</Col>
      </div>
    );
  }
});


export default Homepage;
