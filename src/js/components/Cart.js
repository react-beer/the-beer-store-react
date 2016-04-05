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

  renderCartItem: function(key) {
    var product = this.props.beers[key];
    var count = this.props.cart[key];

    return (
      <Row className="item-cart" key={key}>
        <Col xs={9} sm={9} md={6}>
          <h5 className="title">{product.name}</h5>
          <div className="amount-price">{count}x R$ {product.price}</div>
        </Col>
        <Col xs={3} sm={3} md={6}>
          <Button
            bsStyle="danger"
            className="pull-right"
            onClick={this.props.removeFromCart.bind(null, key)}
          >
            <Glyphicon glyph="remove" aria-hidden="true" />
          </Button>
        </Col>
      </Row>
    );
  },

  renderModalCart: function() {
    var self = this;
    var cartIds = Object.keys(this.props.cart);
    var total = cartIds.reduce(function(prevTotal, key) {
      var product = self.props.beers[key];
      var count = self.props.cart[key];
      var isAvailable = product && product.status === 'available';

      if (product && isAvailable) {
        return prevTotal + (count * parseFloat(product.price.replace(',', '.')) || 0);
      }

      return prevTotal;
    }, 0);

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
        </Modal.Header>
        <Modal.Body>
          {cartIds.map(this.renderCartItem)}
        </Modal.Body>
        <Modal.Footer>
          <h4 className="total">Total: R$ {total.toFixed(2)}</h4>
        </Modal.Footer>
      </Modal>
    );
  },

  render: function() {
    var items = Object.keys(this.props.cart);

    return (
      <div>
        {this.renderModalCart()}
        <nav className="nav-cart">
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Button
                  bsStyle="success"
                  onClick={this.showModalCart}
                >
                  <Glyphicon
                    glyph="shopping-cart"
                    aria-hidden="true"
                  /> Show Cart ({items.length})
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
