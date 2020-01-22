import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Home = () => {
  const [newTask, setNewTask] = useState(false);
  const [viewTasks, setViewTasks] = useState(false);


  if (newTask) {
    return <Redirect to="/tasks/new" />;
  } else if (viewTasks) {
    return <Redirect to="/tasks" />
  } else {
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
          onClick={() => setNewTask(true)}
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
              <FiberNewIcon style={styles.icon} />
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
          onClick={() => setViewTasks(true)}
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
              <AssignmentIcon style={styles.icon} />
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
    )
  }
}

const styles = {
  grid: {
    marginTop: "1em",
    height: "80vh"
  },
  icon: {
    fontSize: "20em",
    color: "#3f51b5",
    padding: ".2em"
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