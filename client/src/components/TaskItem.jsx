import { Component } from 'react';

class TaskItem extends Component {
  state = {
    editModeActive: false,
    newTaskTitle: ''
  };

  toggleTaskEditMode = () => {
    this.setState({
      editModeActive: true,
      newTaskTitle: this.props.task.title
    });
  };

  handleTaskTitleChange = event => {
    const value = event.target.value;
    this.setState({
      newTaskTitle: value
    });
  };

  handleTaskFormSubmission = event => {
    event.preventDefault();
    this.props.onTaskEdit(this.state.newTaskTitle);
    this.setState({ editModeActive: false });
  };

  render() {
    return (
      <li>
        {(this.state.editModeActive && (
          <form onSubmit={this.handleTaskFormSubmission}>
            <input
              type="text"
              placeholder="New task title"
              value={this.state.newTaskTitle}
              onChange={this.handleTaskTitleChange}
            />
            <button>🔒</button>
          </form>
        )) || (
          <>
            {this.props.task.title}
            <button onClick={this.toggleTaskEditMode}>✏️</button>
            <button onClick={this.props.onRemoveTask}>✔️</button>
          </>
        )}
      </li>
    );
  }
}

export default TaskItem;
