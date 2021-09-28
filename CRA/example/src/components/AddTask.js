import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: "",
        checked: false,
        date: "2021-09-28"

    }
    render() { 
        return(
            <div className="form">
              <input 
              type="text" 
              placeholder="dodaj zadanie" 
              value={this.state.text}
              />      
              <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label>
                <label html="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min="2021-09-28"></input>
                <button>Dodaj</button>
            </div>
        )
    }
}
 
export default AddTask;