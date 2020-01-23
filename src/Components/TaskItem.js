import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Redirect } from 'react-router';

const TaskItem = ({ task, tasks, updateTasks }) => {
  const [edit, setEdit] = useState(false);

  const deleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDeleted = true;
      }
      return task;
    });

    updateTasks(newTasks);
  }

  const taskStatus = (task) => {
    if (task.isCompleted) {
      return "Completed"
    } else if (!task.isActive) {
      return "Pending";
    } else {
      return "In Progress";
    }
  };

  return (
    edit ?
      <Redirect to={`/tasks/${task.id}/edit`} /> :
      (
        !task.isDeleted ?
          <Paper key={task.id} style={styles.paper}>
            <Grid item key={task.id}>
              <Typography variant="h4">
                {task.title}
              </Typography>
              <section>
                <p>Description: {task.description}</p>
                <p>Due Date: {task.dueDate} hours</p>
                <p>Status: {taskStatus(task)}</p>
                {
                  taskStatus(task) === "Pending" ?
                    <Button
                      variant="contained"
                      color="secondary"
                      style={styles.button}
                      onClick={() => {
                        console.log("Task Started")
                      }
                      }>
                      Start Task
                  </Button> : null
                }
                {
                  taskStatus(task) === "In Progress" ?
                    <Button
                      variant="contained"
                      color="secondary"
                      style={styles.button}
                      onClick={() => {
                        console.log("Task Completed")
                      }
                      }>
                      Complete Task
                  </Button> : null
                }
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    setEdit(true)
                  }
                  }>
                  Edit Task
                  </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    deleteTask(task.id)
                  }
                  }>
                  Delete Task
                  </Button>
              </section>
            </Grid>
          </Paper> : null
      )
  );
}

const styles = {
  paper: {
    width: "80%",
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: "2em"
  },
  button: {
    width: "100%",
    padding: "auto"
  },
  container: {
    width: "100%",
    wordWrap: "break-word"
  }
}


export default TaskItem;