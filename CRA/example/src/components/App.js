import React, { Component } from 'react';
import './App.css';
//npm install react-router-dom
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>

class App extends Component {
 

 

  render() {
    return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
             <li> <Link to="/">Start</Link></li>
             <li> <Link to="/news">Aktualności</Link></li>
             <li> <Link to="/contact">Kontakt</Link></li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
        </section>
      </div>
    </Router>
    );
  }
}


export default App;