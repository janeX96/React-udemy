import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: "",
        checked: false,
        date: this.minDate

    }

    handleDate = (e) => {
        this.setState({
            date : e.target.value
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.value
        })
    }

    handleClick = () => {
        
    }

    render() { 
      let maxDate = this.minDate.slice(0,4) * 1 + 1
      maxDate = maxDate + "-12-31" // 2022-12-31
        return(
            <div className="form">
              <input 
              onChange={this.handleText}
              type="text" 
              placeholder="dodaj zadanie" 
              value={this.state.text}
              />      
              <input onChange={this.handleCheckbox} type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet </label>
                <label html="date">Do kiedy zrobić</label>
                <input type="date" onChange={this.handleDate} value={this.state.date} min={this.minDate} max={maxDate}></input>
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        )
    }
}
 
export default AddTask;