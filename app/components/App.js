var React = require('react');
var CondosContainer = require('./CondosContainer');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-md-6 md-offset-3">
          <h1 className='text-primary'>South Lake Union Condos</h1>
        </div>
      </div>)
  }
});

module.exports = App;
