import React, { Component } from 'react';
import './App.css'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

  }

  componentWillMount() {
    this.calculateTime(this.props.deadline)
  }

  componentDidMount() {
    setInterval(() => this.calculateTime(this.props.deadline)
      ,1000)
  }

  calculateTime(deadline) {
    let time = Math.floor((Date.parse(deadline) - Date.parse(new Date()))/1000);
    let seconds = Math.floor(time % 60)
    let minutes = Math.floor((time/60) % 60)
    let hours = Math.floor((time/(60*60)) % 24)
    let days = Math.floor((time/(60*60*24)))
    this.setState({seconds: seconds, minutes: minutes, hours: hours, days: days});

  }

  render() {
    return (
      <div className="Contagem-holder">
        <div className="Count-days">{this.state.days} dias</div>
        <div className="Count-hours">{this.state.hours} horas</div>
        <div className="Count-minutes">{this.state.minutes} minutos</div>
        <div className="Count-seconds">{this.state.seconds} segundos</div>
      </div>
    )
  }
}


export default Clock;
