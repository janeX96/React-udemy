class App extends React.Component {
  state={
    value:""
  }

  handleResetClick = () => {
    this.setState({
      value:""
    })
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
    
  }
  render() {
    return (
      <>
      <input value={this.state.value} placeholder="wpisz coś" onChange={this.handleInputChange} type="text"/>
      <button onClick={this.handleResetClick}>Reset</button>
      <h1 className = "title">{this.state.value}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))