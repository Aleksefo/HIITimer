import _BackgroundTimer from 'react-native-background-timer'
import React from 'react'

interface Props {
  ref: any
}
class BackgroundTimer extends React.Component<Props> {
  backgroundTimer

  componentWillUnmount() {
    this.stopCount()
  }

  startCount = (callback, delay) => {
    _BackgroundTimer.start()
    this.backgroundTimer = _BackgroundTimer.setInterval(callback, delay)
  }

  stopCount = () => {
    _BackgroundTimer.clearInterval(this.backgroundTimer)
    _BackgroundTimer.stop()
  }
  render() {
    return null
  }
}

export default BackgroundTimer
