const data = {
  users: [
    { id:1,
      age:29,
      name: "Arek",
      sex: "male"
    },
    { id:2,
      age:19,
      name: "Anna",
      sex: "female"
    },
    { id:3,
      age:25,
      name: "Janek",
      sex: "male"
    }
  ]
}

const Item = ({user}) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>wiek: <strong>{user.age}</strong> lat</p>
    <p>płeć: <strong>{user.sex}</strong></p>
  </div>

)
  

class ListItems extends React.Component{

  render() {
    let users = this.props.data.users
    users = users.filter((user)=> user.sex === "female")
    const Items = users.map( user => <Item key = {user.id} user = {user}/>)

    return (
      <ul>
        {Items}
      </ul>
    )
  }
}


ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))