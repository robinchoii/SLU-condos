var React = require('react');
var ReactDOM = require('react-dom');

var CondoList = React.createClass({
  render: function() {
    return (
        <div className="col-md-3">
          <a href={this.props.condo.link}><img className='condo img-responsive img-thumbnail' src={"app/images/Condo1/" + this.props.condo.picture} /></a>
          <div >
            <p>Bedroom: {this.props.condo.bedroom}</p>
            <p>Bath: {this.props.condo.bathroom}</p>
            <p>sqft: {this.props.condo.sqft}</p>
            <p>Price: {this.props.condo.price}</p>
          </div>
        </div>
      )
  }
});

module.exports = CondoList
