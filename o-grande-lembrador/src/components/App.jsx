import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(params) {
    super(params)
  }

  render() {
    return (
      <div className="container">
        <div className="form-inline">
          <div className="form-group">
            <input className="input from-control" placeholder="Eu invoco sua grande memória.." />
            <button className="btn btn-danger" type="button">Lembre-me!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
