import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// material ui //
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
  Grid,
  CardHeader
} from '@material-ui/core';

const styles =  ({

});
// ---- //

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


  handleSubmit = (event) => {
    // Stop html form default of loading new page view
    event.preventDefault();
    // On submit, dispatch action
    this.props.dispatch({ type: 'ADD_PAGE_1', payload: this.state.input });
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
    const { classes } = this.props;
    // On re-render after click submit, go to page 2
    if (this.state.toPage2 === true) {
      return <Redirect to='/page2' />
    }

    return (

      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={6}>
            <Card>
              <CardHeader subheader="Page 1 of 4" />
              <CardContent>
                <Typography variant="h5" >
                  How are you feeling today?
                </Typography>
                <form>
                  <TextField
                    label="Score 1-5"
                    value={this.state.input}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={this.handleSubmit}>
                      NEXT
                    </Button>
                  </CardActions>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>


      // NO MATERIAL UI//
      // <div>
      //   <h1>1 of 4 pages</h1>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       How are you feeling today?
      //       <input 
      //         type="number" 
      //         placeholder="Score 1-5"
      //         value={this.state.input}
      //         onChange={this.handleChange}
      //       />
      //       <input type="submit" value="Next"/>
      //     </label>
      //   </form>
      // </div>

    );
  }
}

Page1.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledForm = withStyles(styles)(Page1);

export default connect()(styledForm);

// export default connect()(Page1);