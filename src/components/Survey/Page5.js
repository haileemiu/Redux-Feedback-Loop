import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // redirect to do another survey
      toPage1: false
    }
  }

  handleClick = () => {
    this.setState({
      toPage1: true
    })
  }


  render() {

    if (this.state.toPage1 === true) {
      return <Redirect to='/page1' />
    }

    return (
      <div>
        <h1>THANK YOU!</h1>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>

    );
  }
}



export default connect()(Page5);