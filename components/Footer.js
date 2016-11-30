import React from 'react'
import { Col, LinkContainer } from 'react-bootstrap'
import { Link } from 'react-router'
var Footer = React.createClass({
  render: function(){
    var graenn = {backgroundColor:'green', color:'white'}
    var raudur = {backgroundColor:'red', color:'white'}
    var fjolublar = {backgroundColor:'indigo', color:'white'}
    var blar = {backgroundColor:'blue', color:'white', textDecoration:'none'}
    return (
      <div>
        <Col xs={6} sm={6} md={3} lg={3} style={graenn}>footerItem</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={raudur}>footerItem2</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={fjolublar}>footerItem3</Col>
        <Col xs={6} sm={6} md={3} lg={3} style={blar}><a href="https://github.com/audunnezra" style={{ color:'white', textDecoration: 'none' }}>github account</a  ></Col>
      </div>
    );
  }
});

export default Footer;
