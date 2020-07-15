import React, { Component } from 'react';
import Banner from './banner';
import Lead from './lead';
import Ourmenu from './ourmenu';
import Favorites from './favorites';





export default class Home extends Component {
    render() {
      return (
       <div>
           
            <Banner/>
            <Lead/>
            <Ourmenu />
            <Favorites /><br/><br/>
           
       </div>
        )
    }
}