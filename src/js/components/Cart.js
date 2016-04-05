'use strict';

var React     = require('react');
var Row       = require('react-bootstrap/lib/Row');
var Col       = require('react-bootstrap/lib/Col');
var Modal     = require('react-bootstrap/lib/Modal');
var Button    = require('react-bootstrap/lib/Button');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var Cart = React.createClass({
  propTypes: {
    beers: React.PropTypes.object.isRequired,
    cart: React.PropTypes.object.isRequired,
    removeFromCart: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      modalCart: false
    }
  },

  showModalCart: function() {
    this.setState({
      modalCart: true
    });
  },

  hideModalCart: function() {
    this.setState({
      modalCart: false
    });
  },

  renderModalCart: function() {
    return (
      <Modal
        {...this.props}
        show={this.state.modalCart}
        onHide={this.hideModalCart}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <Glyphicon glyph="shopping-cart" aria-hidden="true" /> Details Cart
          </Modal.Title>
          <Modal.Body>
            <Row className="item-cart">
              <Col xs={9} sm={9} md={6}>
                <h5 className="title">Bamberg O Calibre</h5>
                <div className="amount-price">3x R$ 22,93</div>
              </Col>
              <Col xs={3} sm={3} md={6}>
                <Button bsStyle="danger" className="pull-right">
                  <Glyphicon glyph="remove" aria-hidden="true" />
                </Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <h4 className="total">Total: R$ 167,84</h4>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    );
  },

  render: function() {
    return (
      <div>
        {this.renderModalCart()}
        <nav className="nav-cart">
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Button
                  bsStyle="success"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={this.showModalCart}
                >
                  <Glyphicon
                    glyph="shopping-cart"
                    aria-hidden="true"
                  /> Show Cart (4)
                </Button>
              </div>
            </Col>
          </Row>
        </nav>
      </div>
    );
  }
});

module.exports = Cart;
