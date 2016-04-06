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

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  onClickAddToCart: function() {
    var self = this;
    var key = this.props.index;
    var amount = parseInt(this.refs.amount.getValue());

    this.setState({ isLoading: true });
    this.props.addToCart(key, amount);
    this.refs.amount.refs.input.value = 1;

    setTimeout(function() {
      self.setState({ isLoading: false });
    }, 1000);
  },

  renderButton: function(isAvailable) {
    var isLoading = this.state.isLoading;
    var buttonTextLoading = (isLoading ? 'Adding...' : 'Add to Cart');
    var buttonText = (isAvailable ? buttonTextLoading : 'SOLD OUT!');

    if (isAvailable) {
      return (
        <Button
          bsStyle="primary"
          bsSize="large"
          className="btn-add-cart"
          disabled={isLoading}
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
              <b>Price:</b> $ {product.price}
            </span>
          </Col>
          <Col xs={3} sm={3} md={6}>
            <Input
              type="text"
              className="amount"
              ref="amount"
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
