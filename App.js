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
    //prościej
    const random = Math.floor(Math.random() * this.state.omens.length);
    this.setState({
      drawn: this.state.omens[random]
    })
  }

  handleAddOmen = () =>{
    if(this.state.newOmen.length>0){
      //kopia tablicy
     const omens = [...this.state.omens]
     const omen = this.state.newOmen
     omens.push(omen)

     this.setState({
      omens:omens,
      newOmen: ""
     })
     
     alert('dodałem nową wróżbę, aktualne wróżby to: ' + omens)
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