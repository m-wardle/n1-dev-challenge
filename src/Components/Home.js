import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      style={styles.grid}
    >
      <ButtonBase
        focusRipple
        type="button"
        onClick={() => console.log("hello")}
      >
        <Paper
          elevation={3}
          style={styles.paper}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={styles.subGrid}
          >
            {/* <PostAddIcon style={styles.icon} /> */}
            <Typography
              variant='h5'
              align="center"
            >
              New Task
            </Typography>
          </Grid>
        </Paper>
      </ButtonBase>
      <ButtonBase
        focusRipple
        type="button"
        onClick={() => console.log("hello")}
      >
        <Paper
          elevation={3}
          style={styles.paper}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={styles.subGrid}
          >
            {/* <PostAddIcon style={styles.icon} /> */}
            <Typography
              variant='h5'
              align="center"
            >
              View Tasks
            </Typography>
          </Grid>
        </Paper>
      </ButtonBase>
    </Grid>
  );
}

const styles = {
  grid: {
    marginTop: "1em",
    height: "80vh"
  },
  subGrid: {
    height: "60vh",
    width: "40vw"
  },
  paper: {
    padding: "1.5em",
  }
}

export default Home;