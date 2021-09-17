const Person = (props) => (<p>{props.fname} {props.lname}</p>)


class List extends React.Component{
  state = {
    persons: [
      {
        id: 12,
        fname: "Jan",
        lname: "K."
      },
      {
        id: 13,
        fname: "Marysia",
        lname: "S."
      },
      {
        id: 14,
        fname: "Maciej",
        lname: "L."
      },
      {
        id: 15,
        fname: "Agata",
        lname: "P."
      }
    ]
  }

  showPersons = () => {
    const persons = this.state.persons.map(person =>(
      <li>
        <Person fname={person.fname} lname={person.lname}/>
        <button onClick={()=>this.handleDeletePerson(person)}>usuń</button>
      </li>
    ))
  
    return persons
  }
  
  handleDeletePerson = (person) => {
    const persons = [...this.state.persons]
    const index = persons.indexOf(person)
    console.log(index)
    if(index !== -1){
      persons.splice(index,1)
      this.setState({
         persons: persons
      })
    }
    
  }

  render(){
    return(
      <>
      <h1>test</h1>
      <ul>
        {this.showPersons()}
      </ul>
      </>
    )
  }

 

}

ReactDOM.render(<List/>, document.getElementById('root'))