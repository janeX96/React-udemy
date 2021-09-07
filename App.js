//Przycisk, po kliknięciu dodawana jest litera do tekstu

class App extends React.Component{

  // constructor(props){
  //     super(props);
  //     this.state = {
  //       text: ""
  //     }
  //     this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    text: ""
  }

  handleClick = () =>{
    // this.state.text += "A";
    // console.log(this.state.text)

    const letter = "A"
    // this.setState({
    //   text: this.state.text+letter
    // })

    this.setState(() => ({
        text: this.state.text + letter
    })
    )

  }

  render(){
    return(
      <>
      <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
      <h1>{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))