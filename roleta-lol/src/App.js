import React, { Component } from 'react'
import './App.css'
import Roleta from './components/Roleta';

class App extends Component {
  state = {
    array: ['annie', 'ashe', 'janna', 'karma', 'leona', 'lulu', 'lux', 'morgana', 'nami', 'rakan', 'seraphine', 'sona', 'soraka', 'yuumi'],
    index: 0,
    name: 'circle'
  }

  randomArray = () => {
    const { array } = this.state;
    this.setState({
      index: Math.floor(Math.random() * array.length)
    })
  }

  spinWheel = () => {
    this.setState({
      name: 'circle start-rotate'
    });
    setTimeout(() => {
      this.setState({
        name: 'circle stop-rotate'
      })
    }, 10000);
  }

  render() {
    const { array, index, name } = this.state;
    return (
      <div className='App'>
        <h1>Roleta sups</h1>
        <Roleta array={array} circle={name} />
        <button onClick={this.spinWheel} className='spin-button'>Girar</button>
      </div>
    )
  }
}

export default App;
