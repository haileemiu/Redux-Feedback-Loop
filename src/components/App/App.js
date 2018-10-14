import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from '../Admin/Admin';
import Page1 from '../Survey/Page1';
import Page2 from '../Survey/Page2';
import Page3 from '../Survey/Page3';
import Page4 from '../Survey/Page4';
import Page5 from '../Survey/Page5';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/page4" component={Page4} />
            <Route path="/page5" component={Page5} />
            <Redirect to='/page1' />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
