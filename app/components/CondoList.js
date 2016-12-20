var React = require('react');
var ReactDOM = require('react-dom');

var CondoList = React.createClass({
  render: function() {
    return (
        <div className="col-md-4">
          <div className='condo'>
            <img src={"app/images/Condo1/" + this.props.condo.picture} />
          </div>
          <div >
            <p>Bedroom: {this.props.condo.bedroom}</p>
            <p>Bath: {this.props.condo.price}</p>
            <p>Squarefoot: {this.props.condo.price}</p>
            <p>Price: {this.props.condo.price}</p>
          </div>
        </div>
      )
  }
});

module.exports = CondoList
