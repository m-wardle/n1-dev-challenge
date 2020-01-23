import React from 'react';
import { useParams } from 'react-router-dom'

const Task = ({ tasks, updateTasks }) => {
  const { id } = useParams()
  return (
    <p>id: {id}</p>
  );
}

export default Task;