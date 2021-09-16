const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return(
      <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state={
    amount: "",
  }

  currencies = [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartość w dolarach:'
    },
    {id: 2,
      name: 'euro',
      ratio: 4.2,
      title: 'Wartość w euro:'},
    {id: 3,
      name: 'pound',
      ratio: 5.20,
      title: 'Wartość w funtach:'}
  ]

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    const {amount} = this.state

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>
    ))

    return (
      <div class="app">
        <label>
          <input 
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
          />
        </label>
        {/* <Cash cash={amount} ratio={ratioDollar} title="wartosć w dolarach"/>
        <Cash cash={amount} ratio={ratioEuro} title="wartosć w euro"/> */}
        {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))