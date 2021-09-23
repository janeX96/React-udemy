class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    console.log("Wywołanie metody constructor")
  }

  componentWillMount(){
    console.log('Wywołanie metody componentWillMount')
  }

  componentDidMount(){
    console.log('Wywołanie metody componentDidMount')
    this.setState({})
  }

  componentDidUpdate(){
    console.log('Wywołanie metody componentDidUpdate')
  }
  render() {
    console.log('Wywołanie metody render')
    return (
      <div>
         <p>
        lifecycle - montowanie komponentu
      </p>
      <Child/>
      </div>
     
    )
  }
}

class Child extends React.Component{
  componentDidMount(){
    console.log(`
    -----------------------
    Wywołanie metody componentDidMount w kompon. Child`)
    this.setState({})
  }

  render() {
    console.log('Wywołanie metody render w kompon. Child')
    return (
      <h1>child</h1>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))