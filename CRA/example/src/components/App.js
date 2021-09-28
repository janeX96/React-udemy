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

  //sposób 1

    // //kopiuję tablicę ze state
    // const tasks = [...this.state.tasks]
    // //znajduję index elementu o danym id
    // const index = tasks.findIndex(task=> task.id === id)
    // //usuwam ten element ze skopiowanej tablicy
    // tasks.splice(index,1)
    // this.setState({tasks})

  //sposób 2 

    //kopia tablicy
    let tasks = [...this.state.tasks]
    //pozostawienie w tablicy tylko tych elementów,
    // które spałniają warunek !==id
    tasks = tasks.filter(task => task.id !== id)
    this.setState({tasks})


  }
  
  changeTaskStatus = (id) => {
    console.log("done elementu o id: " + id)
    //inny sposób kopiowania tablicy
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({tasks})
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