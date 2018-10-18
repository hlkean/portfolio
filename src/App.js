import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDesktop, faPeopleCarry, faHandshake, faObjectGroup, faPalette, faUserTie, faChartBar } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { Nope } from "./components/Nope";

library.add(faChartBar);
library.add(faServer);
library.add(faDesktop);
library.add(faObjectGroup);
library.add(faPalette);
library.add(faUserTie);
library.add(faHandshake);
library.add(faPeopleCarry);

class App extends Component {
  
  
  constructor (props) {
    super(props);
    this.introComplete = this.introComplete.bind(this);
    this.transitionHero = this.transitionHero.bind(this);
    this.state = {
      loading: true,
      introComplete: false,
      loadContent: false,
      heroTransition: false,
      loaded: document.getElementById('root').classList.contains('complete')
    };
  };  

  introComplete = () => {
    this.setState({introComplete: true});
  };

  transitionHero = (page) => {
    if(!this.heroTransition && page !== '/') {
      this.setState({heroTransition: true});
    } else {
      this.setState({heroTransition: false});
    }
  };
  
  noLoading = () => {
    if(!this.loading) {
      this.setState({loading: false});
    }
  };
  loadNewContent = () => {
    this.setState({loadContent: true});
  };

  render = () => {

    return (
    <Router>
      <div>
      {/* viewChange={this.loadNewContent} location={this.location}  */}
        {/* Nav bar */}
        <Route render={props => (<Navbar {...props} onTransition={this.transitionHero}/>)} />
        {/* loading={this.loading} onComplete={this.introComplete} componentDidMount={this.noLoading} */}
              {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}

        <Route render={props => (<Hero {...props}/>)} />
          
          <Switch>
            <Route exact path="/" render={(props) => (<Intro {...props}/>)} />
            {/* loaded={this.introComplete} */}
            <Route path="/about" render={(props) => (<About {...props} />)} />
            <Route path="/contact" render={(props) => (<Contact {...props} />)} />
            <Route render={(props) => (<Nope {...props} />)} />
          </Switch>
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );

  };
  
  // render = () => {
  //   return (
  //     <div className="App"> 
  //       <div id="loader">
  //         <span className="-bg loading"></span>
  //         <span className="-fg loading"></span>
  //       </div>        
  //       <Intro loading={this.loading} onComplete={this.introComplete} componentDidMount={this.noLoading} />
  //       {this.state.introComplete &&
  //           <Navbar viewChange={this.loadNewContent} />
  //       }
        
  //       {this.state.loadContent &&
  //       <
  //       <div class="page-content">
  //         <h1>This should be some page content</h1>
  //       </div>
  //       }
        
  //       {/* <Client name="this is a name"/>
  //       <Client name="this is another name"/> */}
  //     </div>
  //   );
  // }
}

export default App;
