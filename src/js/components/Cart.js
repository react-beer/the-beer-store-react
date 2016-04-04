'use strict';

var React     = require('react');
var Row       = require('react-bootstrap/lib/Row');
var Col       = require('react-bootstrap/lib/Col');
var Button    = require('react-bootstrap/lib/Button');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var Cart = React.createClass({
  render: function() {
    return (
      <nav className="nav-cart">
        <Row>
          <Col md={12}>
            <div className="pull-right">
              <Button
                bsStyle="success"
                data-toggle="modal"
                data-target="#myModal"
              >
                <Glyphicon glyph="shopping-cart" aria-hidden="true" /> Show Cart (4)
              </Button>
            </div>
          </Col>
        </Row>
      </nav>
    );
  }
});

module.exports = Cart;
