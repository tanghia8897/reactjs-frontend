import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div>
            <div className="card">
              <img className="card-img-top" src={this.props.images} alt={this.props.children}/>
              <div className="card-block">
                <h4 className="card-title">{this.props.children}</h4>
                <p className="card-text">{this.props.price}</p>
                <a href="#" className="btn btn-primary">Mua ngay</a>
              </div>
            </div>
        </div>
    );
  }
}

export default Product;
