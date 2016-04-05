'use strict';

var React      = require('react');
var classNames = require('classnames');
var Row        = require('react-bootstrap/lib/Row');
var Col        = require('react-bootstrap/lib/Col');
var Input      = require('react-bootstrap/lib/Input');
var Button     = require('react-bootstrap/lib/Button');
var Image      = require('react-bootstrap/lib/Image');

var Product = React.createClass({
  propTypes: {
    index: React.PropTypes.string.isRequired,
    product: React.PropTypes.object.isRequired,
    addToCart: React.PropTypes.func.isRequired
  },

  onClickAddToCart: function() {
    var key = this.props.index;
    this.props.addToCart(key);
  },

  renderButton: function(isAvailable) {
    var buttonText = (isAvailable ? 'Add to Cart' : 'SOLD OUT!');

    if (isAvailable) {
      return (
        <Button
          bsStyle="primary"
          bsSize="large"
          className="btn-add-cart"
          block
          onClick={this.onClickAddToCart}
        >
          {buttonText}
        </Button>
      );
    }
    else {
      return (
        <Button
          className="sold-out"
          disabled
        >
          {buttonText}
        </Button>
      );
    }
  },

  render: function() {
    var product = this.props.product;
    var isAvailable = (product.status === 'available' ? true : false);
    var hideBox = (!isAvailable ? 'hidden' : '');

    return (
      <Col md={3} className="product">
        <h4 className="title text-center">{product.name}</h4>
        <Image
          src={product.image}
          className="center-block"
          responsive
          thumbnail
          alt={product.name}
        />
        <Row className={classNames('box', hideBox)}>
          <Col xs={9} sm={9} md={6}>
            <span className="price">
              <b>Price:</b> R$ {product.price}
            </span>
          </Col>
          <Col xs={3} sm={3} md={6}>
            <Input
              type="text"
              className="amount"
              defaultValue="1"
              standalone
            />
          </Col>
        </Row>
        {this.renderButton(isAvailable)}
      </Col>
    );
  }
});

module.exports = Product;
