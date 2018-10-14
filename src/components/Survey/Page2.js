import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toPage3: false
    }
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_PAGE_2', payload: this.state.input});
    this.setState({
      toPage3: true
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() { 

    if (this.state.toPage3 === true) {
      return <Redirect to='/page3' />
    }

    return ( 
      <div>
        <h1>2 of 4 pages</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            How well are you understanding the content?
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


 
export default connect()(Page2);