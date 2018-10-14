import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {
  // Local state to store data to be mapped in a table
  state = {
    feedback: []
  }

  // Get feedback data
  getFeedback() {
    axios({
      method: 'GET',
      url: '/admin'
    }).then(response => {
      // Set local state on return
      this.setState({
        feedback: response.data
      })
    }).catch(() => {
      alert('Unable to get feedback data.');
    })
  }

  // Delete a feedback entry
  deleteFeedbackEntry(id) {
    axios({
      method: 'DELETE', 
      url: `/admin/${id}`
    }).then(() => {
      // Load the feedback after delete 
      this.getFeedback();
    }).catch(() => {
      alert('Unable to delete feedback.');
    })
  }

  // Delete feedback click
  handleClick = (feedback) => () => {
    this.deleteFeedbackEntry(feedback.id);
  }

  // Call get on page load  
  componentDidMount() {
    this.getFeedback();
  }

  render() { 
    return ( 
      <div>
        <h1>Feedback Results</h1>
        <table>
          <thead>
            <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
            </tr>
          </thead>
          {/* Loop through the data and display each entry in a new row */}
          <tbody>
            {this.state.feedback.map((feedback) => {
              return <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={this.handleClick(feedback)}>Delete</button></td>
                
              </tr>
            })}
          </tbody>
        </table>
      </div>
     );
  }
}
 
export default connect()(Admin);