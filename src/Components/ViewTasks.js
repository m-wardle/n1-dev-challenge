import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ViewTasks = ({ tasks, updateTasks }) => {

  const taskList = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        tasks={tasks}
        updateTasks={updateTasks}
      />
    )
  })
  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        To-Do
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        {taskList}
      </Grid>
    </React.Fragment>
  );
}

export default ViewTasks;