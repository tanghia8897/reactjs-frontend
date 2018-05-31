import React, { Component } from 'react';
import {Route } from "react-router-dom";
import Home from './../component/Home';
import News from './../component/News';
import NewsDetail from '../component/NewsDetail';
import Contact from '../component/Contact';

class Directional extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/news" component={News} />
                {/* <Route path="/news-detail" component={NewsDetail} /> */}
                <Route path="/news-detail/:slug.:id.html" component={NewsDetail} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default Directional;