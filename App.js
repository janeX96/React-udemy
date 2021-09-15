class App extends React.Component{
  state={
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 1, name: "ziemniaki", active: false },
      { id: 1, name: "kasza", active: true },
      { id: 1, name: "zupa wodna", active: true },
      { id: 1, name: "wrzątek", active: false },
      { id: 1, name: "chleb", active: true },
    ],

  
  }

  render(){
    return(
      <>
        <Header items={this.state.items}/>
        <ListItems/>
      </>
    );
  }
}