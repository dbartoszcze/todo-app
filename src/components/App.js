import React, { Component } from 'react';
import './App.css'
import AddTask from './AddTask'
import TaskList from './TaskList'
class App extends Component {
  counter = 4
  state = {
    tasks: [
      {
        id: 0,
        text: 'Create todo app',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'app structure app',
        date: '2018-02-16',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'start doing todo app',
        date: '2018-02-01',
        important: true,
        active: false,
        finishDate: '2018-02-03'
      },
      {
        id: 3,
        text: 'Create sth new',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },

    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(el => el.id === id)
    tasks.splice(index, 1)

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('change' + id)

    const tasks = Array.from(this.state.tasks)

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime();
      }
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    this.counter++;
    return true;
  }

  render() {
    return (
      <div className='app'>
        TODO List
        <AddTask add={this.addTask} />
        <TaskList change={this.changeTaskStatus} delete={this.deleteTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
