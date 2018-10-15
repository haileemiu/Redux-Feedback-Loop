import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';


import PropTypes from 'prop-types';

import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  Button,
  TableHead,
  TableRow,
  Paper,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogContentText,
  // DialogTitle

} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Admin extends Component {
  // Local state to store data to be mapped in a table

  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
      open: false
    }
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
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this survey!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteFeedbackEntry(feedback.id);
        swal("Poof! Your survey has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your survey is safe!");
      }
    });



    
  }

  // Call get on page load  
  componentDidMount() {
    this.getFeedback();
  }

  render() {
    const { classes } = this.props;

    return (

      <div>
        <Paper className={classes.root}>
          <h1>Feedback Results</h1>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Feeling</TableCell>
                <TableCell>Comprehension</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            {/* Loop through the data and display each entry in a new row */}
            <TableBody>
              {this.state.feedback.map((feedback) => {
                return <TableRow key={feedback.id}>
                  <TableCell>{feedback.id}</TableCell>
                  <TableCell>{feedback.feeling}</TableCell>
                  <TableCell>{feedback.understanding}</TableCell>
                  <TableCell>{feedback.support}</TableCell>
                  <TableCell>{feedback.comments}</TableCell>
                  <TableCell><Button variant="contained" color="secondary" size="small" onClick={this.handleClick(feedback)}>Delete</Button></TableCell>


                </TableRow>
              })}
            </TableBody>
          </Table>
        </Paper>

      </div>
    );
  }
}

// export default connect()(Admin);


Admin.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledForm = withStyles(styles)(Admin);

export default connect()(styledForm);