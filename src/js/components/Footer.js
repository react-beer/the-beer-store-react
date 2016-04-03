'use strict';

var React = require('react');

var Footer = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired,
    ghUserName: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      ghUserName: 'facebook/react'
    }
  },

  render: function() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love">♥</span> by 
          <a href={"https://github.com/" + this.props.ghUserName}>
            {this.props.author}
          </a>
        </p>
      </footer>
    );
  }
});

module.exports = Footer;
