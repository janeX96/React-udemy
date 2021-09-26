import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';


const API = 'https://randomuser.me/api/?results=5'

class App extends Component {
  state = {
   users : null
  }

  componentDidMount(){
 
  }
  

  handleDataFetch = () =>{
    // console.log("click")
    fetch(API)
    .then(response => {
      if(response.ok){
        console.log(response)
        return response
      }
      throw Error(response.status)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        users: data.results
      })
    })
    .catch(error => console.log(error))
    
  }

  render() {
  const users = this.state.users

   
    return (
     <>
     <ButtonFetchUsers click={this.handleDataFetch}/>
     { users ? <UsersList users={users}/> : users}
     </>
    );
  }
}


export default App;