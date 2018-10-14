import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toPage5: false
    }
  }

  handleSubmit = (event) =>  {
    // Prevent redirect page on submit of form
    event.preventDefault();

    // dispatch action to reducer
    this.props.dispatch({type: 'ADD_PAGE_4', payload: this.state.input});
    
    // Redirect to page 5
    this.setState({
      toPage5: true
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() { 

    if (this.state.toPage5 === true) {
      return <Redirect to='/page5' />
    }

    return ( 
      <div>
        <h1>4 of 4 pages</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Any comments?
            <input 
              type="text" 
              placeholder="be honest"
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

export default connect()(Page4);