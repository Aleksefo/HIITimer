import _BackgroundTimer from 'react-native-background-timer'
import React from 'react'

type Props = {
  ref: any
  duration: number
  onComplete: () => void
  onTick: (number) => void
}

class BackgroundTimer extends React.Component<Props> {
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

  startCount = delay => {
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
//todo add delay/period optional prop
//todo maybe check if first second doesn't count
//todo round onTick based on prop. countType='seconds', ms, m, h, should return array
export default BackgroundTimer
