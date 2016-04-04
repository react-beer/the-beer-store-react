'use strict';

var React            = require('react');
var Grid             = require('react-bootstrap/lib/Grid');
var GitHubForkRibbon = require('./GitHubForkRibbon');
var Header           = require('./Header');
var Products         = require('./Products');
var Footer           = require('./Footer');

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

  render: function() {
    return (
      <Grid>
        <GitHubForkRibbon />
        <Header />
        <Products beers={this.state.beers} />
        <Footer author="Breno Polanski" ghUserName="brenopolanski" />
      </Grid>
    );
  }
});

module.exports = App;
