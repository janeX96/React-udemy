class Counter extends React.Component{
  state = {
    result: 1,
    ratio: 2
  }

  handleMultiplication = () =>{
    this.setState((state)=>(
      {
        result: state.result * state.ratio
      }
    ))
  }
    
    componentDidUpdate() {
      if(this.state.result > 1000 && this.state.ratio ===2){
        this.setState({
          ratio: 0.5
        })
      }else if(this.state.result < 1 && this.state.ratio === 0.5){
        this.setState({
          ratio: 2
        })
      }
    }

  render(){
    return(
      <div>
        <p>Kalkulator</p>
        <button onClick={this.handleMultiplication}>{`Pomnóż przez ${this.state.ratio}`}</button>
        <h1>Wynik: {this.state.result}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))