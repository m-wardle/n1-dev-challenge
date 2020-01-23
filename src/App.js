import React, { useState } from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Home from './Components/Home';
import ViewTasks from './Components/ViewTasks';
import NewTask from './Components/NewTask';
import EditTask from './Components/EditTask';
import Task from './Components/Task';
import { BrowserRouter, Route } from 'react-router-dom';

const dummyTasks = [
  {
    id: 1,
    userId: 1,
    title: "Take out garbage",
    description: "Separate recycling and compost first",
    dueDate: "2020-02-18T18:30",
    isActive: false,
    isCompleted: false,
    isDeleted: false
  },
  {
    id: 2,
    userId: 1,
    title: "Walk dog",
    description: "Take path through ravine, but make sure to bring bags",
    dueDate: "2020-01-20T20:30",
    isActive: true,
    isCompleted: false,
    isDeleted: false
  },
  {
    id: 3,
    userId: 1,
    title: "Finish assignment",
    description: "Developer skills challenge for job application",
    dueDate: "2020-02-24T10:30",
    isActive: true,
    isCompleted: true,
    isDeleted: false
  },
  {
    id: 4,
    userId: 1,
    title: "Get groceries",
    description: "Need milk, eggs, and flour",
    dueDate: "2020-02-24T10:30",
    isActive: true,
    isCompleted: false,
    isDeleted: true
  },
];

localStorage.setItem('taskData', JSON.stringify(dummyTasks))

function App() {
  return (
    <React.Fragment>
      <Appbar position="relative">
        <Typography variant="h4" align="center" style={{ margin: 10 }}>
          To-do List
        </Typography>
      </Appbar>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/tasks"
          component={() => <ViewTasks />}
          exact
        />
        <Route path="/tasks/new"
          component={() => <NewTask />}
        />
        <Route path="/tasks/:id"
          component={() => <Task />}
          exact
        />
        <Route path="/tasks/:id/edit"
          component={() => <EditTask />}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
