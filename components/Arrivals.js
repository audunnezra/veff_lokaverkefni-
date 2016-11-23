import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Arrivals = React.createClass({
  getArrivalData: function() {
    $.ajax({
      url: 'http://apis.is/flight?language=en&type=arrivals',
      cache: true,
      type: 'GET',
      dataType: 'json',
      success: function(incomingData) {
        this.setState({arrivalData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {arrivalData: []};
  },
  componentDidMount: function() {
    this.getArrivalData();
  },
  render: function() {
    return (
      <div>
        <h1>ARRIVALS</h1>
        {!this.state.arrivalData.results ?
          <img src="https://d13yacurqjgara.cloudfront.net/users/12755/screenshots/1037374/hex-loader2.gif"></img>
          :
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>FLIGHT NO.</th>
            <th>GOING TO:</th>
            <th>ETA</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
              {this.state.arrivalData.results.map(function(res, id) {
                return(
                <tr key={id}>
                  <td>{res.date}</td>
                  <td>{res.flightNumber}</td>
                  <td>{res.from}</td>
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

export default Arrivals;
