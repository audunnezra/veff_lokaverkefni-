import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Departures = React.createClass({
  getDepartureData: function() {
    $.ajax({
      url: 'http://apis.is/flight?language=en&type=departures',
      cache: true,
      type: 'GET',
      dataType: 'json',
      success: function(incomingData) {
        this.setState({departureData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {departureData: []};
  },
  componentDidMount: function() {
    this.getDepartureData();
  },
  render: function() {
    return (
      <div>
        <h1>DEPARTURES</h1>
        {!this.state.departureData.results ?
          <img src="https://d13yacurqjgara.cloudfront.net/users/12755/screenshots/1037374/hex-loader2.gif"></img>
          :
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>FLIGHT NO.</th>
            <th>GOING TO:</th>
            <th>ETD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
              {this.state.departureData.results.map(function(res, id) {
                return(
                <tr key={id}>
                  <td>{res.date}</td>
                  <td>{res.flightNumber}</td>
                  <td>{res.to}</td>
                  <td>{res.plannedArrival}</td>
                  <td>{res.realArrival}</td>
                </tr>);
              })}
        </tbody>
        </Table>
        }
      </div>
    );
  }
});

export default Departures;
