'use strict';

var React = require('react');

var Cart = React.createClass({
  render: function() {
    return (
      <nav className="nav-cart">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right">
              <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal">
                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Show Cart (4)
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Cart;
