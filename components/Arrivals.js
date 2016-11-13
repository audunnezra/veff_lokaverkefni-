import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Arrivals = React.createClass({
  getArrivalData: function() {
    $.ajax({
      url: 'http://apis.is/flight?language=en&type=arrivals',
      cache: false,
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
        <h1>Arrivals</h1>
        {!this.state.arrivalData.results ?
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
          :
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight Number</th>
            <th>Destination</th>
            <th>ETA</th>
            <th>Status</th>
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
