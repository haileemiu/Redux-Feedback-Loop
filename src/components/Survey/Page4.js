import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    const { classes } = this.props;
    if (this.state.toPage5 === true) {
      return <Redirect to='/page5' />
    }

    return ( 
      <div className={classes.root}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={6}>
          <Card>
            <CardHeader subheader="Page 4 of 4" />
            <CardContent>
              <Typography variant="h5" >
                Any more comments? 
              </Typography>
              <form>
                <TextField
                  label="you can be honest"
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

     );
  }
}

Page4.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledForm = withStyles(styles)(Page4);

export default connect()(styledForm);