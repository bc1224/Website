import React, { Component } from 'react';
import  { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


class App extends Component {


  render() {

      return (
          <div className="App">

                  <Header />

              <Route render={({location}) => (
                  <TransitionGroup>
                      <CSSTransition
                          key={window.location.pathname}
                          timeout={400}
                          classNames="fade"
                      >
                          <Switch location={location}>
                              <Route exact path="/" component={Home}/>
                              <Route path="/about" component={About}/>
                              <Route path="/resume" component={Resume}/>
                              <Route path="/contact" component={Contact}/>
                          </Switch>
                      </CSSTransition>
                  </TransitionGroup>
              )}/>
              </div>);




  }
}

export default App;
