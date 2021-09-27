import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks:[
      {id: 0,
       text: "task1",
       date: '2022-02-22',
       important: true,
       active: true,
       finishDate: null
      },
      {id: 1,
        text: "task2",
        date: '2019-03-15',
        important: true,
        active: true,
        finishDate: null
       },
       {id: 2,
        text: "task3",
        date: '2018-05-11',
        important: true,
        active: true,
        finishDate: null
       },
    ]
  }

 
  deleteTask = (id) => {
    console.log("delete elementu o id: " + id)
  }
  
  changeTaskStatus = (id) => {
    console.log("done elementu o id: " + id)
  }
 

  render() {
    return (
     <>
      <AddTask/>
      <TaskList 
      tasks = {this.state.tasks} 
      delete = {this.deleteTask} 
      change = {this.changeTaskStatus}/>
     </>
    );
  }
}


export default App;