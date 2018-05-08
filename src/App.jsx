import React, { Component } from 'react';
import Clock from './Clock'
import './App.css'

class App extends Component {
  constructor(params) {
    super(params)
    this.state = {
      deadline: "December 25, 2018",
      newDeadline: ''
    }

  }

  setNewDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  processDeadline(event) {
    this.setState({newDeadline: event.target.value});
  }

  render() {
    return (
      <div className="Countdown-holder">
        <div>Contagem termina em {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}></Clock>
        <div>
          <input placeholder="Insira uma nova data" onChange={event => this.processDeadline(event)}/>
          <button onClick={() => this.setNewDeadline()}>Mudar deadline</button>
        </div>
      </div>
    )
  }
}

export default App;
