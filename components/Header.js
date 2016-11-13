import React from 'react'
import {Col} from 'react-bootstrap'
var Header = React.createClass({
  render: function(){
    var graenn = {backgroundColor:'green', color:'white'}
    var raudur = {backgroundColor:'red', color:'white'}
    var fjolublar = {backgroundColor:'indigo', color:'white'}
    var blar = {backgroundColor:'blue', color:'white'}
    return (
      <div>
        <Col xs={6} sm={6} md={3} lg={3} style={graenn}>headerObj1</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={raudur}>headeObj2</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={fjolublar}>headerObj3</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={blar}>headerObj4</Col>
      </div>
    );
  }
});

export default Header;
