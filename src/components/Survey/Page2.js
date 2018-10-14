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
    const { classes } = this.props;
    if (this.state.toPage3 === true) {
      return <Redirect to='/page3' />
    }

    return ( 
      <div className={classes.root}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={6}>
          <Card>
            <CardHeader subheader="Page 2 of 4" />
            <CardContent>
              <Typography variant="h5" >
                How well are you understanding?
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
     );
  }
}

Page2.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledForm = withStyles(styles)(Page2);

export default connect()(styledForm);

 
