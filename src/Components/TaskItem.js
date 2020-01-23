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

const TaskItem = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [thisTask, updateThisTask] = useState(task);

  const tasks = JSON.parse(localStorage.getItem('taskData'))

  const startTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isActive = true;
      }
      return task;
    });

    localStorage.setItem('taskData', JSON.stringify(newTasks));
    updateThisTask({
      ...task,
      isActive: true
    })
  };

  const deleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDeleted = true;
      }
      return task;
    });

    localStorage.setItem('taskData', JSON.stringify(newTasks));
    updateThisTask({
      ...task,
      isDeleted: true
    })
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = true;
      }
      return task;
    });

    localStorage.setItem('taskData', JSON.stringify(newTasks));
    updateThisTask({
      ...task,
      isCompleted: true
    })
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
      <Redirect to={`/tasks/${thisTask.id}/edit`} /> :
      (
        !thisTask.isDeleted ?
          <Paper key={thisTask.id} style={styles.paper}>
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <Typography variant="h4">
                {thisTask.title}
              </Typography>
              <section>
                <p>Description: {thisTask.description}</p>
                <p>Due Date: {thisTask.dueDate.split("T")[0]} at {thisTask.dueDate.split("T")[1]}</p>
                <p>Status: {taskStatus(thisTask)}</p>
                <Grid
                  container
                  direction="row"
                  justify="center"
                >
                  {
                    taskStatus(thisTask) === "Pending" ?
                      <Button
                        variant="contained"
                        color="primary"
                        style={styles.accept}
                        onClick={() => {
                          startTask(thisTask.id)
                        }
                        }>
                        Start Task
                    </Button> : null
                  }
                  {
                    taskStatus(thisTask) === "In Progress" ?
                      <Button
                        variant="contained"
                        color="secondary"
                        style={styles.complete}
                        onClick={() => {
                          completeTask(thisTask.id)
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
                      deleteTask(thisTask.id)
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