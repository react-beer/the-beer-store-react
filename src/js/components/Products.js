'use strict';

var React = require('react');
var Row   = require('react-bootstrap/lib/Row');
var Beer  = require('./Beer');

var Products = React.createClass({
  propTypes: {
    beers: React.PropTypes.object.isRequired
  },

  renderBeer: function(key) {
    return <Beer index={key} key={key} product={this.props.beers[key]} />
  },

  render: function() {
    return (
      <main className="products">
        <Row>
          {Object.keys(this.props.beers).map(this.renderBeer)}
        </Row>
      </main>
    );
  }
});

module.exports = Products;
