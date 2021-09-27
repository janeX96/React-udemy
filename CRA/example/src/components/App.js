import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userName: "",
    email: "",
    pass: "",
    accept: false,

    errors : {
      username: false,
      email: false,
      pass: false,
      accept: false
    }
  }

 

  messages = {
    username_incorrect : 
    "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w adresie email",
    password_incorrect: "Hasło musi mieć 8 znaków",
    accept_incorrect: "Należy zapoznać się z regulaminem"
  }

  componentDidMount(){
 
  }
  


  handleChange = (e) => {
    console.log(e.target.type)
    console.log(e.target.name)


    const name = e.target.name
    const type = e.target.type
    
    if(type === "text" || type === "password" || type === "email"){
      const value = e.target.value

          this.setState({
            [name]: value
          })
    }
    else if(type === "checkbox"){
      const checked = e.target.checked
      this.setState({
        [name]: checked
      })
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const validation = this.formValidation()
    //console.log(validation)
   // console.log("działa")

    if(validation.correct){
      this.setState({
        userName: "",
        email: "",
        pass: "",
        accept: false,
    
        errors : {
          username: false,
          email: false,
          pass: false,
          accept: false
      }})
      console.log("Formularz wysłany")
    }else{
      this.setState({
        errors : {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept
        }
      })
    }
  }

  formValidation = () => {
    let username = false
    let email = false
    let pass = false
    let accept = false
    let correct = false
    
    if(this.state.userName.length > 10 
      && this.state.userName.indexOf(' ') === -1){
        username = true
    }

    if(this.state.email.indexOf('@') !== -1){
      email = true
    }

    if(this.state.pass.length === 8){
      pass = true
    }

    if(this.state.accept){
      accept = true
    }

    if(username && email && pass && accept){
      correct = true
    }

    return({
      correct,
      username,
      email,
      pass,
      accept

    })
  }

  render() {
    return (
     <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">Twoje imię: 
          <input 
          id="user" 
          type="text" 
          name="userName" 
          value={this.state.userName}
          onChange={this.handleChange}
          />
          {this.state.errors.username 
          && <span>{this.messages.username_incorrect}</span>}
        </label>
        
        <label htmlFor="user">Twój email: 
          <input 
          id="email" 
          type="text" 
          name="email" 
          value={this.state.email}
          onChange={this.handleChange}
          />
          {this.state.errors.email 
          && <span>{this.messages.email_incorrect}</span>}
        </label>

        <label htmlFor="password">Twoje hasło: 
          <input 
          id="password" 
          type="password" 
          name="pass" 
          value={this.state.pass}
          onChange={this.handleChange}
          />
          {this.state.errors.pass 
          && <span>{this.messages.password_incorrect}</span>}
        </label>
        <label htmlFor="accept">
          <input onChange={this.handleChange}
          type="checkbox" 
          id="accept" 
          name="accept" 
          checked={this.state.accept}
          />
          Zapoznałem się z regulaminem
        </label>
         {this.state.errors.accept 
          && <span>{this.messages.accept_incorrect}</span>}
        <button >Wyślij</button>
        
      </form>
     </>
    );
  }
}


export default App;