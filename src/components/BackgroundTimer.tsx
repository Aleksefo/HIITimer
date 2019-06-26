import _BackgroundTimer from 'react-native-background-timer'
import React from 'react'

interface Props {
  ref: any
  duration: number
  onComplete: () => void
  onTick: (number) => void
}

class BackgroundTimer extends React.Component<Props> {
  //todo add delay/period optional prop
  backgroundTimer
  initialDate = Date.now()

  state = {
    targetDate: this.initialDate + this.props.duration,
    currentDate: this.initialDate,
    duration: this.props.duration,
  }

  componentWillUnmount() {
    this.stopCount()
  }

  startCount = (callback, delay) => {
    let initialDate = Date.now()
    this.setState({
      targetDate: initialDate + this.props.duration,
      currentDate: initialDate,
    })
    _BackgroundTimer.start()
    this.backgroundTimer = _BackgroundTimer.setInterval(() => {
      let currentDate = Date.now()
      let timeRemaining = this.state.targetDate - currentDate
      this.setState({ currentDate, duration: timeRemaining })
      if (timeRemaining <= 0) this.complete()
      else this.props.onTick(timeRemaining)
    }, delay)
  }

  stopCount = () => {
    _BackgroundTimer.clearInterval(this.backgroundTimer)
    _BackgroundTimer.stop()
  }
  complete = () => {
    this.props.onTick(0)
    this.stopCount()
    this.setState({ duration: this.props.duration })
    this.props.onComplete()
  }

  render() {
    return null
  }
}

export default BackgroundTimer
