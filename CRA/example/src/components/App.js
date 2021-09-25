import React, { Component } from 'react';
import './App.css';

//rosnąca pseudo baza danych
const data = [
  {
    id: 1, 
    title: "Wiadomość nr 1", 
    body: "Zawartość wiadomości nr 1 ..."
  },
  {
    id: 2, 
    title: "Wiadomość nr 2", 
    body: "Zawartość wiadomości nr 2 ..."
  },
  {
    id: 3, 
    title: "Wiadomość nr 3", 
    body: "Zawartość wiadomości nr 3 ..."
  },
]

setInterval(()=> {
  const index = data.length + 1
  data.push({
    id: index, 
    title: `Wiadomość nr ${index}`, 
    body: `Zawartość wiadomości nr ${index} ...`
  })
  // console.log(data)
}, 8000)

class App extends Component {
  state = {
   comments: [...data]
  }

  getData = () => {
    
    if(this.state.comments.length !== data.length){
      console.log("aktualizacja")
      this.setState({
      comments: [...data]
      })
    }
    else{
      console.log("takie same dane - brak aktualizacji")
    }
  }

  componentDidMount(){
    this.idI= setInterval(this.getData, 2000)
  }

  //w razie likwidacji komponentu
  componentWillUnmount(){
    clearInterval(this.idI)
  }
  
  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    // console.log(comments)
    return (
     <div className="App">
       {comments.reverse()}
     </div>
    );
  }
}


export default App;