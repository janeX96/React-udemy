const Item = (props) => <li>{`owoc ${props.nazwa}`}</li>


class ListItems extends React.Component{
  state = {
    items: ["jabłko","śliwka","gruszka"]
  }

  render() {
    const Items = this.state.items.map( item => <Item key = {item} nazwa = {item}/>)
    
    return (
      <ul>
        {Items}
      </ul>
    )
  }
}


ReactDOM.render(<ListItems/>, document.getElementById('root'))