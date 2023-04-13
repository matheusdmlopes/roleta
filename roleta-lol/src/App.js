import React, { Component } from 'react'
import './App.css'
import Roleta from './components/Roleta';

class App extends Component {
  state = {
    array: ['annie', 'ashe', 'janna', 'karma', 'leona', 'lulu', 'lux', 'morgana', 'nami', 'rakan', 'seraphine', 'sona', 'soraka', 'yuumi'],
    index: 0,
  }

  randomArray = () => {
    const { array } = this.state;
    this.setState({
      index: Math.floor(Math.random() * array.length)
    })
  }

  render() {
    const { array, index } = this.state;
    return (
      <div className='App'>
        <h1>Roleta sups</h1>
        <Roleta array={array} />
        <button onClick={this.randomArray}>Escolher aleatório</button>
        <h2>{array[index]}</h2>
      </div>
    )
  }
}

export default App;
