import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page1 extends Component {
  constructor(props) {
    super(props);
    // Set local state for an empty input box
    // and prepare for page change on submit
    this.state = {
      input: '',
      toPage2: false
    }
  }

  
  handleSubmit = (event) =>  {
    // Stop html form default of loading new page view
    event.preventDefault();
    // On submit, dispatch action
    this.props.dispatch({type: 'ADD_PAGE_1', payload: this.state.input});
    // Go to page 2
    this.setState({
      toPage2: true
    })
  }

  // Takes in and stores the input to local state
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() { 
    // On re-render after click submit, go to page 2
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