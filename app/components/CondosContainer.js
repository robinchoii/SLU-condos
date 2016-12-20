var React = require('react');
var ReactDOM = require('react-dom');

var CondosContainer = React.createClass({
  render: function() {
    var condos = [
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'},
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'},
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'},
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'},
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'},
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      },
      {
        sqft: '750',
        bedroom: '2',
        bathroom: '1',
        price: '55000'
      }
    ];
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

