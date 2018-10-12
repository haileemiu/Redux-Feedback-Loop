import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {
  
  state = {
    surveys: []
  }

  // Get survey data
  getSurveys() {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      console.log(response.data);
      this.setState({
        surveys: response.data
      })
    }).catch((error) => {
      alert('unable to get surveys');
      console.log('error', error);
    })
  }

  componentDidMount() {
    this.getSurveys();
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

          <tbody>
            {this.state.surveys.map((survey) => {
              return <tr key={survey.id}>
                <td>{survey.feeling}</td>
                <td>{survey.understanding}</td>
                <td>{survey.support}</td>
                <td>{survey.comments}</td>
                {/* TOD0: add functionality */}
                <td><button>Delete</button></td>
                
              </tr>
            })}
          </tbody>
        </table>
      </div>
     );
  }
}
 
export default connect()(Admin);