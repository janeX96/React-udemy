const data = {
  users: [
    { id:1,
      age:29,
      name: "Arek"
    },
    { id:2,
      age:19,
      name: "Anna"
    },
    { id:3,
      age:25,
      name: "Janek"
    }
  ]
}

const Item = ({user}) => (
  <div>
    <h1>Użytkownik {user.name}</h1>
    <h2>Ma {user.age} lat</h2>
  </div>

)
  

class ListItems extends React.Component{
  state = {
    items: ["jabłko","śliwka","gruszka"]
  }

  render() {
    const users = this.props.data.users
    const Items = users.map( user => <Item key = {user.id} user = {user}/>)

    return (
      <ul>
        {Items}
      </ul>
    )
  }
}


ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))