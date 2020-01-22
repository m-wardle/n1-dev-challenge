import React, { useState } from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Home from './Components/Home'
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
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
