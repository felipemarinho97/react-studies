import React, { Component } from 'react';
import Clock from './Clock'
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap'

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
        <Form inline>
          <FormControl placeholder="Insira uma nova data" onChange={event => this.processDeadline(event)}/>
          <Button onClick={() => this.setNewDeadline()}>Mudar deadline</Button>
        </Form>
      </div>
    )
  }
}

export default App;
