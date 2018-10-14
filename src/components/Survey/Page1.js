import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toPage2: false
    }
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_PAGE_1', payload: this.state.input});
    this.setState({
      toPage2: true
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() { 

    if (this.state.toPage2 === true) {
      return <Redirect to='/page2' />
    }

    return ( 
      <div>
        <h1>1 of 4 pages</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            How are you feeling today?
            <input 
              type="number" 
              placeholder="Score 1-5"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <input type="submit" value="Next"/>
          </label>
        </form>
      </div>

     );
  }
}


 
export default connect()(Page1);