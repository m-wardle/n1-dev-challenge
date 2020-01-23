import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Redirect } from 'react-router';

const TaskItem = ({ task, tasks, updateTasks }) => {
  const [edit, setEdit] = useState(false);

  const startTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isActive = true;
      }
      return task;
    });

    updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDeleted = true;
      }
      return task;
    });

    updateTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = true;
      }
      return task;
    });

    updateTasks(newTasks);
  };

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
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <Typography variant="h4">
                {task.title}
              </Typography>
              <section>
                <p>Description: {task.description}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Status: {taskStatus(task)}</p>
                <Grid
                  container
                  direction="row"
                  justify="center"
                >
                  {
                    taskStatus(task) === "Pending" ?
                      <Button
                        variant="contained"
                        color="primary"
                        style={styles.accept}
                        onClick={() => {
                          startTask(task.id)
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
                        style={styles.complete}
                        onClick={() => {
                          completeTask(task.id)
                        }
                        }>
                        Complete Task
                    </Button> : null
                  }
                  <Button
                    variant="contained"
                    color="secondary"
                    style={styles.edit}
                    onClick={() => {
                      setEdit(true)
                    }
                    }>
                    Edit Task
                </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={styles.delete}
                    onClick={() => {
                      deleteTask(task.id)
                    }
                    }>
                    Delete Task
                </Button>
                </Grid>

              </section>
            </Grid>
          </Paper > : null
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
  accept: {
    width: "8em",
    margin: "1em",
    color: "black",
    backgroundColor: green[500]
  },
  edit: {
    width: "8em",
    margin: "1em",
    color: "black",
    backgroundColor: yellow[500]
  },
  complete: {
    width: "8em",
    margin: "1em",
    color: "black",
    backgroundColor: blue[500]
  },
  delete: {
    width: "8em",
    margin: "1em",
    color: "black",
    backgroundColor: red[500]
  },
  container: {
    width: "100%",
    wordWrap: "break-word"
  }
}


export default TaskItem;