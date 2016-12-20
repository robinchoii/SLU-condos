var React = require('react');
var ReactDOM = require('react-dom');
var condos = require('../javascript/condos');

var CondosContainer = React.createClass({
  render: function() {
    var condo = condos.map(function(condo) {
      return (
        <div className='col-md-4 condo'>
          <p>Bedroom: {condo.bedroom}</p>
          <p>Bath: {condo.price}</p>
          <p>Squarefoot: {condo.price}</p>
          <p>Price: {condo.price}</p>
        </div>
        )
    });

    return (
        <div className="col-md-12">
          <h5 className=''>{condo}</h5>
        </div>
      )
  }
});


ReactDOM.render(
  <CondosContainer />,
  document.getElementById('condoList')
  )

