import React from 'react'
import {Col} from 'react-bootstrap'
var Footer = React.createClass({
  render: function(){
    var graenn = {backgroundColor:'green', color:'white'}
    var raudur = {backgroundColor:'red', color:'white'}
    var fjolublar = {backgroundColor:'indigo', color:'white'}
    var blar = {backgroundColor:'blue', color:'white'}
    return (
      <div>
        <Col sm={12} md={12} lg={12} style={graenn}>1</Col>
        <Col sm={3} md={3} lg={3} style={raudur}>2</Col>
        <Col sm={3} md={3} lg={3} style={fjolublar}>3</Col>
        <Col sm={3} md={3} lg={3} style={blar}>4</Col>
      </div>
    );
  }
});

export default Footer;
