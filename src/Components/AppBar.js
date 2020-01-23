import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <Appbar position="relative">
      <Typography variant="h4" align="left" style={{ margin: 10 }}>
        <Link to={"/"}><HomeIcon /></Link>
        To-do List
      </Typography>
    </Appbar>
  );
}

export default AppBar;