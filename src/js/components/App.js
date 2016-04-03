'use strict';

var React  = require('react');
var Grid   = require('react-bootstrap/lib/Grid');
var Header = require('./Header');

var App = React.createClass({
  render: function() {
    return (
      <Grid>
        <Header />
      </Grid>
    );
  }
});

module.exports = App;
