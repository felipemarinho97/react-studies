import React from 'react';


class Loading extends React.Component {
  constructor(params) {
    super(params)
    this.state = {
      loadingDots: '...',
    }
  }

  UNSAFE_componentWillMount() {
    this._mounted = true;
  }

  componentDidMount() {
    setInterval(() => {
      this.calculataPontos()
    },300)
  }

  componentWillUnmount() {
    this._mounted = false
  }

  calculataPontos() {
    if (this._mounted) {
      switch (this.state.loadingDots) {
        case '...':
          this.setState({loadingDots: ''})
          break;
        case '..':
          this.setState({loadingDots: '...'})
          break;
        case '.':
          this.setState({loadingDots: '..'})
          break;
        case '':
          this.setState({loadingDots: '.'})
          break;
        default:
          this.setState({loadingDots: '...'})
      }
    }
  }


  render() {
    return (
      <div className="loading-dots" style={{display: 'inline'}}>{this.state.loadingDots}</div>
    )
  }
}

export default Loading
