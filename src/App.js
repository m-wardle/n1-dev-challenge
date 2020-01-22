import React, { useState } from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Home from './Components/Home';
import ViewTasks from './Components/ViewTasks';
import NewTask from './Components/NewTask';
import EditTask from './Components/EditTask';
import Task from './Components/Task';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const dummyMessages = [
    {
      id: 1,
      user_id: 1,
      title: "Take out garbage",
      description: "Separate recycling and compost first",
      dueDate: null,
      isActive: false,
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 2,
      user_id: 1,
      title: "Walk dog",
      description: "Take path through ravine, but make sure to bring bags",
      dueDate: null,
      isActive: false,
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 3,
      user_id: 1,
      title: "Finish assignment",
      description: "Developer skills challenge for job application",
      dueDate: null,
      isActive: false,
      isCompleted: false,
      isDeleted: false
    },
  ];

  const [messages, updateMessages] = useState(dummyMessages);

  return (
    <React.Fragment>
      <Appbar position="relative">
        <Typography variant="h4" align="center">
          To-do List
        </Typography>
      </Appbar>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/tasks"
          component={() => <ViewTasks
            messages={messages}
            updateMessages={updateMessages}
          />}
          exact
        />
        <Route path="/tasks/:id"
          component={() => <Task
            messages={messages}
            updateMessages={updateMessages}
          />}
        />
        <Route path="/tasks/new"
          component={() => <NewTask
            messages={messages}
            updateMessages={updateMessages}
          />}
        />
        <Route path="/tasks/edit"
          component={() => <EditTask
            messages={messages}
            updateMessages={updateMessages}
          />}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
