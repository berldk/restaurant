import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
              <div className="navbar-brand"><img src="images/logo.png" style={{width: '100%'}} alt="" /></div>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav nav-links">
                <Link to="/alamaison"><li>Home</li></Link>
                <Link to="/alamaison/story"><li>Our story</li></Link>
                <Link to="/alamaison/contact"><li>Contact</li></Link>
                <Link to="/alamaison/reservation"><li>Reservation</li></Link>
               
              </ul>
             
            </div>
          </div>
        </nav>
      )
    }
    }