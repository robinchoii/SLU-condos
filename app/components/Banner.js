var React = require('react');
var ReactDOM = require('react-dom');

var Banner = React.createClass({
  render: function() {
    return (
      <img className="img-responsive banner" src='app/images/Seattle.jpg' />
    )
  }
});

ReactDOM.render(
  <Banner />,
  document.getElementById('banner')
)
