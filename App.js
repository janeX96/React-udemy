class OmenGenerator extends React.Component{
  state = {
    omens: 
    [
      "pierwsza wróżba",
      "druga wróżba",
      "trzecia wróżba"
    ],
    drawn: "",
    newOmen: "",
    
  }

  handleRandomOmen = () =>{
    const min = 0
    const max = this.state.omens.length-1
    const random = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  
    this.setState({
      drawn: this.state.omens[random]
    })
  }

  handleAddOmen = () =>{
    if(this.state.newOmen.length>0){
      const omens = this.state.omens
    omens.push(this.state.newOmen)
    this.setState({
      omens:omens,
      newOmen: ""
    })
    }
  }

  handleChange = e => {
    this.setState({
      newOmen: e.target.value
    })
  }

  render(){
    return(
      <>
      <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
      <br/>
      <input value={this.state.newOmen} type="text" onChange={this.handleChange}/>
      <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
      <br/>
      <h1>{this.state.drawn}</h1>
      </>
    )
  }
}

ReactDOM.render(<OmenGenerator/>, document.getElementById('root'))