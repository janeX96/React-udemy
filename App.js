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
    ,
    { id:4,
      age:28,
      name: "Agata",
      sex: "female"
    }
    ,
    { id:5,
      age:27,
      name: "Andrzej",
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
  state ={
    select: "all",
  }

  usersList = () =>{
    let users = this.props.data.users

    switch(this.state.select) {

      case "all":
        return users.map(user => <Item user={user} key={user.id}/>)
      
      case "female": 
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id}/>)

      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id}/>)
      
      default:
        return "brak danych"
    }

   
  }
  
  handleUsersFilter = (option) => {
    this.setState({
      select: option
    })

  }


  render() {
    return (
      <div>
       <button onClick={this.handleUsersFilter.bind(this,"all")}>Wszyscy</button>
       <button onClick={this.handleUsersFilter.bind(this,"female")}>Kobiety</button>
       <button onClick={this.handleUsersFilter.bind(this,"male")}>Mężczyźni</button>
       {this.usersList()}
      </div>
    )
  }
}


ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'))