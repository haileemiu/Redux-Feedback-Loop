import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  
  render() { 
    return ( 
      <div>
        <h1>Feedback Results</h1>
      </div>
     );
  }
}
 
export default connect()(Admin);