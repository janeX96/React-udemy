
const displayMessage = (isConfirmed, isFormSubmitted) => {
  if(isFormSubmitted){
      if(isConfirmed){
      return <ValidationMessage txt="Możesz obejrzeć film"/>
    }
    else{
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu!"/>
    }
  }
  else{
    return null;
  }
}

const ValidationMessage = (props) => {
  //destrukturyzacja
  const {txt} = props
  //

  return(
    <p>{txt}</p>
  )
}


class TicketShop extends React.Component{

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  // displayMessage = () => {
  //   if(this.state.isFormSubmitted){
  //       if(this.state.isConfirmed){
  //       return <ValidationMessage txt="Możesz obejrzeć film"/>
  //     }
  //     else{
  //       return <ValidationMessage txt="Nie możesz obejrzeć tego filmu!"/>
  //     }
  //   }
  //   else{
  //     return null;
  //   }
  // }

  handleFormSubmit= (e) => {
    e.preventDefault()

    if(!this.state.isFormSubmitted){
       this.setState({
      isFormSubmitted: true
     })
    }
   
  }

  render(){
    //destrukturyzacja, wyodrębnianie elementu
    const {isConfirmed, isFormSubmitted} = this.state
    //
    console.log(isConfirmed)

    return(
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} defaultchcked={this.state.isConfirmed}/>
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br/>
          <button type="submit">Kup bilet</button>
        </form>

        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    )
  }
}


ReactDOM.render(<TicketShop/>, document.getElementById('root'))