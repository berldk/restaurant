import React, { Component } from 'react';
export default class Ourmenu extends Component {
    render() {
      return (
          <div>  
              <div >
              <div className="container-fluid bg-3">    
                  
                  <div className="row text-center"><h2>Our favorites</h2></div>
                  <div className="row">
                  <div className="col-sm-4">                  
                      <img src="images/favorite1.png" className="img-responsive" style={{width: '100%'}} alt="Image" /><br/>
                      <img src="images/favorite2.png" className="img-responsive" style={{width: '100%'}} alt="Image" /><br/>
                  </div>
                  <div className="col-sm-8"> 
                    <div className="row">
                        <div className="col-sm-6"><h4>Macaroni au boeuf</h4> 
                        <em>Pipe rigate served with beef cooked in spicy tomato sauce</em></div> 
                        <div className="col-sm-6  text-center">$17</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6"><h4>Riz Creole aux champignons</h4>
                        <em>Rice cooked with fried vermicelli served with saute mushrooms</em></div>  
                        <div className="col-sm-6  text-center">$13</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6"><h4>Riz Creole aux champignons</h4>
                        <em>Rice cooked with fried vermicelli served with saute mushrooms</em></div>  
                        <div className="col-sm-6  text-center">$13</div>
                    </div>
               
                  </div>
                                  
                  </div>
              </div><br />
              </div>              
          </div>
   )
  }
  }
