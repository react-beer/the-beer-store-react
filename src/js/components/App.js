'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var GitHubForkRibbon = require('./GitHubForkRibbon');
var Header = require('./Header');
var Footer = require('./Footer');

var App = React.createClass({
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
