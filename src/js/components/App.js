'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var GitHubForkRibbon = require('./GitHubForkRibbon');
var Header = require('./Header');
var Footer = require('./Footer');

var App = React.createClass({
  getInitialState: function() {
    return {
      beers: {}
    }
  },

  loadBeers: function() {
    this.setState({
      beers: require('../utils/data-beers');
    });
  },

  render: function() {
    return (
      <Grid>
        <GitHubForkRibbon />
        <Header />
        <Footer author="Breno Polanski" ghUserName="brenopolanski" />
      </Grid>
    );
  }
});

module.exports = App;
