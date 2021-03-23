import axios from 'axios';

export const listTasks = async () => {
  const response = await axios.get('http://localhost:3000/tasks');
  const body = response.data;
  const tasks = body.tasks;
  return tasks;
};

export const createTask = async data => {
  const response = await axios.post('http://localhost:3000/tasks', data);
  const body = response.data;
  const task = body.task;
  return task;
};

export const editTask = async (id, data) => {
  const response = await axios.patch(`http://localhost:3000/tasks/${id}`, data);
  const body = response.data;
  const task = body.task;
  return task;
};

export const deleteTask = async id => {
  await axios.delete(`http://localhost:3000/tasks/${id}`);
};
