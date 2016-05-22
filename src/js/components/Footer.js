'use strict';

var React = require('react');
var Icon  = require('react-fontawesome');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love"><Icon name="heart" /></span>
          <span> by </span>
          <a href="https://github.com/brenopolanski">Breno Polanski</a>
        </p>
      </footer>
    );
  }
});

module.exports = Footer;
