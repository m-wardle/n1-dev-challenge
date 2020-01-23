import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditTask = ({ tasks, updateTasks }) => {
  const { id } = useParams();
  const currentTask = tasks.find(task => task.id === parseInt(id));
  const [title, setTitle] = useState(currentTask.title);
  const [description, setDescription] = useState(currentTask.description);
  const [dueDate, setDueDate] = useState(currentTask.dueDate);
  const [goTasks, setGoTasks] = useState(false);

  useEffect(() => {
    return () => setGoTasks(true)
  })

  const submit = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
      }

      return task
    })

    updateTasks(newTasks)
  }

  return (goTasks ? <Redirect to="/tasks" /> :
    <React.Fragment>
      <Typography variant="h2" align="center">
        Edit Task
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
            defaultValue={currentTask.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            name="description"
            variant="outlined"
            required
            id="description"
            label="description"
            fullWidth
            style={styles.item}
            defaultValue={currentTask.description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            id="datetime-local"
            label="Next appointment"
            variant="outlined"
            required
            type="datetime-local"
            fullWidth
            style={styles.item}
            defaultValue={currentTask.dueDate}
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
            onClick={() => {
              submit(parseInt(id));
            }}
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

export default EditTask;