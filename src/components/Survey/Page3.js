import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toPage4: false
    }
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_PAGE_3', payload: this.state.input});
    this.setState({
      toPage4: true
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() { 

    if (this.state.toPage4 === true) {
      return <Redirect to='/page4' />
    }

    return ( 
      <div>
        <h1>3 of 4 pages</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            How well are you being supported?
            <input 
              type="number" 
              placeholder="Score 1-5"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit"/>
          </label>
        </form>
      </div>

     );
  }
}


 
export default connect()(Page3);