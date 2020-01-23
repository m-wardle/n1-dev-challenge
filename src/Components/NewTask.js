import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewTask = () => {
  const tasks = JSON.parse(localStorage.getItem('taskData'));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [goTasks, setGoTasks] = useState(false);

  const submit = () => {
    const newTask = {
      id: tasks.length + 1,
      userId: 1,
      title,
      description,
      dueDate,
      isActive: false,
      isCompleted: false,
      isDeleted: false
    }
    const newTasks = [...tasks, newTask]

    localStorage.setItem('taskData', JSON.stringify(newTasks));
    setGoTasks(true)
  }

  return (goTasks ? <Redirect to="/tasks" /> :
    <React.Fragment>
      <Typography variant="h2" align="center">
        New Task
      </Typography>
      <form>
        <Grid
          container
          direction="column"
          alignItems="center"
          style={styles.grid}
        >
          <TextField
            name="title"
            variant="outlined"
            required
            id="title"
            label="Title"
            fullWidth
            style={styles.item}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            name="description"
            variant="outlined"
            required
            id="description"
            label="Description"
            fullWidth
            style={styles.item}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            id="datetime-local"
            label="Due Date"
            variant="outlined"
            required
            type="datetime-local"
            fullWidth
            style={styles.item}
            onChange={(event) => setDueDate(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => submit()}
          >
            Confirm
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}

const styles = {
  grid: {
    width: "80%",
    marginTop: "1em",
    marginLeft: "10%",
    marginRight: "10%"
  },
  item: {
    margin: ".5em"
  }
}

export default NewTask;