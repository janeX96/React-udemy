class OmenGenerator extends React.Component{
  state = {
    omens: 
    [
      "pierwsza wróżba",
      "druga wróżba",
      "trzecia wróżba"
    ],
    drawn: "",
    
  }

  handleRandomOmen = () => {
   
    const min = 0
    const max = this.state.omens.length-1
  
    const random = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  
    this.setState({
      drawn: this.state.omens[random]
    })
  }

  render(){
    return(
      <>
      <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
      <br/>
      <input type="text"/>
      <button>Dodaj wróżbę</button>
      <br/>
      <h1>{this.state.drawn}</h1>
      </>
    )
  }
}

ReactDOM.render(<OmenGenerator/>, document.getElementById('root'))