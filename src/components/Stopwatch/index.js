// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onIncrementTimer = () => {
    this.timerId = setInterval(this.increment, 1000)
    this.setState({isTimerRunning: true})
  }

  increment = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="card-container">
            <h1 className="heading">StopWatch</h1>
            <div className="stopWatch-card">
              <div className="header">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="watch"
                />
                <h1 className="title">Timer</h1>
              </div>
              <h1 className="time">{time}</h1>
              <div className="btn-container">
                <button
                  className="success button"
                  type="button"
                  onClick={this.onIncrementTimer}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  className="danger  button"
                  type="button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  className="warning button"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
