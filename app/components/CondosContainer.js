var React = require('react');
var ReactDOM = require('react-dom');
var condos = require('../javascript/condos');
var CondoList = require('./CondoList');

var CondosContainer = React.createClass({
  render: function() {
    var condo = condos.map(function(condo) {
      return (
        <CondoList key={condo.id} condo={condo}/>
        )
    });

    return (
        <div className="col-md-12">
          {condo}
        </div>
      )
  }
});


ReactDOM.render(
  <CondosContainer />,
  document.getElementById('condoList')
  )

