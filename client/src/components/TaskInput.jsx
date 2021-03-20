import { Component } from 'react';

class TaskInput extends Component {
  state = {
    newTask: ''
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const title = this.state.newTask;
    if (title) {
      this.setState({ newTask: '' });
      this.props.onTaskCreate(title);
    }
  };

  handleNewTaskChange = event => {
    const value = event.target.value;
    this.setState({
      newTask: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input
          type="text"
          placeholder="Write new task here..."
          onChange={this.handleNewTaskChange}
          value={this.state.newTask}
        />
        <button>Add to list</button>
      </form>
    );
  }
}

export default TaskInput;
