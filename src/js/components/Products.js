'use strict';

var React   = require('react');
var Row     = require('react-bootstrap/lib/Row');
var Product = require('./Product');

var Products = React.createClass({
  propTypes: {
    beers: React.PropTypes.object.isRequired,
    addToCart: React.PropTypes.func.isRequired
  },

  renderBeer: function(key) {
    return (
      <Product
        index={key}
        key={key}
        product={this.props.beers[key]}
        addToCart={this.props.addToCart}
      />
    )
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
