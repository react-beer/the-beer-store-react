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
            <Col md={3} />
            <Col md={6}>
              <h1 className="neon">The <div className="blink">Beer</div> Store</h1>
            </Col>
            <Col md={3} />
          </Row>
        </header>
      </div>
    );
  }
});

module.exports = Header;
