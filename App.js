class App extends React.Component {
  state={
    value:""
  }

  handleClick = () => {
    this.setState({
      value:""
    })
  }

  handleChange = (e) => {
    console.log("Zawartość w evencie: " + e.target.value)
    console.log("Zawartość przed setState: " + this.state.value)
    this.setState({
      value: e.target.value
    })

    console.log("Zawartość value po setState: " + this.state.value)
  }
  render() {
    console.log("Zawartość value w trakcie render: " + this.state.value)
    //state zmienia się dopiero przy renderowaniu strony
    
    return (
      <>
      <input value={this.state.value} placeholder="wpisz coś" onChange={this.handleChange} type="text"/>
      <button onClick={this.handleClick}>Reset</button>
      <h1 className = "title">{this.state.value}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))