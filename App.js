class App extends React.Component {
  state = {
    status: true,

  }

  componentDidMount(){
    // console.log("Aplikacja zamontowana")
  }

  componentDidUpdate(){
    // console.log("Aplikacja aktualizowana")
  }

  render() {
    // console.log("render")
    return (
      <div>
       <button onClick={()=> this.setState({status: !this.state.status})}>Przełącz</button>
       <Child1 status={this.state.status}/>
       {this.state.status && <Child2 status={this.state.status}/>}
      </div>
     
    )
  }
}

class Child1 extends React.Component{
  componentDidMount(){
    // console.log("(child1) Aplikacja zamontowana)")
  }

  componentDidUpdate(){
    // console.log("(child1)  Aplikacja aktualizowana")
  }
  render() {
    // console.log("(child1)  render")
    return (
      <div>
        {String(this.props.status)}
      </div>
    )
  }
}

class Child2 extends React.Component{
  componentDidMount(){
    console.log("(child2) komp. zamontowany)")
  }

  componentDidUpdate(){
    console.log("(child2)  komp. aktualizowany")
  }

  componentWillUnmount(){
    console.log("(child2)  komp. odmontowany")
  }

  render() {
    console.log("(child2)  render")
    return (
      <div>
        Komponent child2 zamontowany
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))