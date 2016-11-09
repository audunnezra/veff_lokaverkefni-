import React from 'react'
var Header = React.createClass({
  render: function(){
    var hdrStyle = { border:'2px solid red', display:'inline'};
    return (
      <div style={hdrStyle}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    );
  }
});

export default Header;
