'use strict';

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love">♥</span>
          <span> by </span>
          <a href="https://github.com/brenopolanski">Breno Polanski</a>
        </p>
      </footer>
    );
  }
});

module.exports = Footer;
