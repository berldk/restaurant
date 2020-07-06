import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <a className="navbar-brand" href="#">A la maison</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Our story</a></li>
                <li><a href="#">Order now</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
             
            </div>
          </div>
        </nav>
      )
    }
    }