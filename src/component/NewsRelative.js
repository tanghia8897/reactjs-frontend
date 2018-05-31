import React, { Component } from 'react';

class NewsRelative extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.anh} alt="" />
                <div className="card-body">
                <h4 className="card-title">{this.props.tieuDe}</h4>
                <p className="card-text">{this.props.noiDung}</p>
                </div>
            </div>
        );
    }
}

export default NewsRelative;