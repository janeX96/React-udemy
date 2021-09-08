//Przycisk, po kliknięciu dodawana jest litera do tekstu

class App extends React.Component{

  state = {
    text: "",
    btn: "dodaj kolejną cyfrę"
  }

  handleClick = () =>{
    // this.state.text += "A";
    // console.log(this.state.text)

    const num = Math.floor(Math.random()*10)

    this.setState(() => ({
        text: this.state.text + num
    })
    )

  }

  render(){
    const btnName = "stwórz liczbę"
    return(
      <>
      <button onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
      <PanelResult text={this.state.text}/>
      </>
    )
  }
}

const PanelResult = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

ReactDOM.render(<App btnTitle="dodaj cyfrę"/>, document.getElementById('root'))