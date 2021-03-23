import React, { Component } from 'react';

import {
  listTasks,
  createTask,
  deleteTask,
  editTask
} from './services/to-do-list-api';

import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.loadTaskList();
  }

  async loadTaskList() {
    const tasks = await listTasks();
    this.setState({
      tasks: tasks
    });
  }

  handleTaskCreation = async title => {
    const task = await createTask({ title });
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  };

  handleTaskRemoval = async id => {
    await deleteTask(id);
    const tasks = this.state.tasks.filter(task => task._id !== id);
    this.setState({
      tasks: tasks
    });
  };

  handleTaskEdit = async (id, title) => {
    const task = await editTask(id, { title });
    const tasks = this.state.tasks.map(item => {
      return item._id === id ? task : item;
    });
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <div>
        <TaskInput onTaskCreate={this.handleTaskCreation} />
        <ul>
          {this.state.tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onRemoveTask={() => this.handleTaskRemoval(task._id)}
              onTaskEdit={title => this.handleTaskEdit(task._id, title)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
