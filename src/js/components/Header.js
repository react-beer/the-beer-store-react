'use strict';

var React      = require('react');
var GitHubFork = require('./GitHubFork');
var Row        = require('react-bootstrap/lib/Row');
var Col        = require('react-bootstrap/lib/Col');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <GitHubFork />
        <header className="header">
          <Row>
            <Col md={6} mdOffset={3}>
              <h1 className="neon">The <div className="blink">Beer</div> Store</h1>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
});

module.exports = Header;
