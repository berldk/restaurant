import React, { Component } from 'react';
import Nav from './components/nav'
import Banner from './components/banner'
import Lead from './components/lead'
import Ourmenu from './components/ourmenu'
import Favorites from './components/favorites'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
  <div>
		<Nav></Nav>	
		<Banner></Banner>
    <Lead></Lead><br/>
		<Ourmenu></Ourmenu>
		<Favorites></Favorites>
		<Footer></Footer>			          
  </div>
     
    );
  }
}

export default App;