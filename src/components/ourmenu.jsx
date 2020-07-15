import React, { Component } from 'react';

export default class Ourmenu extends Component {
  render() {
    return (
        <div>  
            <div className="exploremenu" >
            <div className="container-fluid bg-3 text-center">    
                
                <div className="row"><h2>Explore our menu</h2></div>
                <div className="row">
                <div className="col-sm-4">
                
                    <img src="images/shareable.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                    <p>shareables</p>
                </div>
                <div className="col-sm-4"> 
                <img src="images/salad.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                <p>Soup & Salads</p>
                </div>
                <div className="col-sm-4"> 
                    <img src="images/main.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                    <p>Main dishes</p>
                </div>
                
                </div>
            </div><br />
            </div>
            <div className="exploremenu-2">
            <div className="container-fluid bg-3 text-center">    
            
                <div className="row">
                <div className="col-sm-4">
                
                    <img src="images/desserts.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                    <p>Desserts</p>
                </div>
                <div className="col-sm-4"> 
                <img src="images/drinks.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                <p>Drinks</p>
                </div>
                <div className="col-sm-4"> 
                    <img src="images/specials.png" className="img-responsive" style={{width: '100%'}} alt="" /><br/>
                    <p>Specials</p>
                </div>
                
                </div>
            </div><br />
            </div>
        </div>
 )
}
}