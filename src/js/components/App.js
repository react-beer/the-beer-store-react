'use strict';

var React    = require('react');
var Grid     = require('react-bootstrap/lib/Grid');
var Header   = require('./Header');
var Cart     = require('./Cart');
var Products = require('./Products');
var Footer   = require('./Footer');

var App = React.createClass({
  getInitialState: function() {
    return {
      beers: {},
      cart: {}
    }
  },

  componentWillMount: function() {
    this.loadBeers();
  },

  loadBeers: function() {
    this.setState({
      beers: require('../utils/data-beers')
    });
  },

  addToCart: function(key, amount) {
    this.state.cart[key] = this.state.cart[key] + amount || amount;
    this.setState({
      cart: this.state.cart
    });
  },

  removeFromCart: function(key) {
    delete this.state.cart[key];
    this.setState({
      cart: this.state.cart
    });
  },

  render: function() {
    return (
      <Grid>
        <Header />
        <Cart
          beers={this.state.beers}
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
        <Products beers={this.state.beers} addToCart={this.addToCart} />
        <Footer author="Breno Polanski" ghUserName="brenopolanski" />
      </Grid>
    );
  }
});

module.exports = App;
