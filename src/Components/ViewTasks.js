import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Typography from '@material-ui/core/Typography';

const ViewTasks = ({ tasks, updateTasks }) => {

  const taskList = tasks.map((task) => {
    return (
      <TaskItem
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
      {taskList}
    </React.Fragment>
  );
}

export default ViewTasks;