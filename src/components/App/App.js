import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Admin from '../Admin/Admin'
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


          <Route path="/feedback" component={Admin} />
          {/* Button on the last survey page */}
          <Link to="/feedback">Submit</Link>
        </div>
      </Router>
    );
  }
}

export default App;
