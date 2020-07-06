import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
        <div className="jumbotron">
        <div className="container text-center">
        <img src="images/logo.png" className="img-responsive"  alt="Image" />      
        
        <img src="images/banner.jpg" className="img-responsive" style={{width: '100%'}} alt="Image" />
        </div>
        </div>
    )
    }
}