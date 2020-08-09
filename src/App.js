import React, { Component } from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Reservation from './components/reservation';
import Contact from './components/contact';
import Story from './components/story';
import Home from './components/home';
import Menu from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
  <Router>
    <div>   
      <Nav/>
      <Switch>  
        <Route path="/alamaison" exact component={Home} />            
        <Route path="/alamaison/story" component={Story} />       
        <Route path="/alamaison/contact" component={Contact} />
        <Route path="/alamaison/reservation" component={Reservation} />
        <Route path="/alamaison/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  </Router>
      
    );
  }
}
export default App;