import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Petrol = React.createClass({
  getWeatherData: function() {
    $.ajax({
      url: 'http://apis.is/petrol',
      cache: false,
      type: 'GET',
      dataType: 'json',
      success: function(incomingData) {
        this.setState({thePetrolData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {thePetrolData: []};
  },
  componentDidMount: function() {
    this.getWeatherData();
  },
  render: function() {
    return (
      <div>
        <h1>Listi yfir bensínverð</h1>
        {!this.state.thePetrolData.results ?
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
          :
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Bensínstöð</th>
            <th>Staðsetning</th>
            <th>Verð - bensín</th>
            <th>Verð - diesel</th>
          </tr>
        </thead>
        <tbody>
              {this.state.thePetrolData.results.map(function(res, id) {
                return(
                <tr key={id}>
                  <td>{res.company}</td>
                  <td>{res.name}</td>
                  <td>{res.bensin95}</td>
                  <td>{res.diesel}</td>
                </tr>);
              })}
        </tbody>
        </Table>
        }
      </div>
    );
  }
});

export default Petrol;
