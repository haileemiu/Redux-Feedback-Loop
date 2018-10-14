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
      url: '/admin'
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

  // Delete a survey
  deleteSurvey(id) {
    axios({
      method: 'DELETE', 
      url: `/admin/${id}`
    }).then(response => {
      this.getSurveys();
    }).catch(error => {
      alert('unable to delete survey');
      console.log('ERROR:', error);
    })
  }

  // Delete survey click
  handleClick = (survey) => () => {
    this.deleteSurvey(survey.id);
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
                <td><button onClick={this.handleClick(survey)}>Delete</button></td>
                
              </tr>
            })}
          </tbody>
        </table>
      </div>
     );
  }
}
 
export default connect()(Admin);