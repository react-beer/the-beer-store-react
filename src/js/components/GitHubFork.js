'use strict';

var React = require('react');

var GitHubFork = React.createClass({
  render: function() {
    return (
      <a href="https://github.com/react-beer">
        <img
          className="fork-ribbon"
          src="build/img/fork-ribbon.png"
          alt="Fork me on GitHub"
        />
      </a>
    );
  }
});

module.exports = GitHubFork;
