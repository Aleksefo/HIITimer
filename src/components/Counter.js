import { View, StyleSheet, Vibration } from 'react-native'
import BackgroundTimer from 'react-native-background-timer'
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    let initialDate = Date.now()
    this.state = {
      targetDate: initialDate + props.duration,
      currentDate: initialDate,
      duration: props.duration,
    }
  }

  // @computed
  // get goalDate() {
  // 	return this.initialDate + this.duration
  // }
  // @computed
  // get remainingTime() {
  // 	return this.goalDate - this.currentDate
  // }
  // @computed
  // get isDone() {
  // 	return this.currentDate >= this.goalDate
  // }

  componentDidMount() {
    this.props.onRef(this)
    this.startCount()
  }
  componentWillUnmount() {
    this.props.onRef(null)
    BackgroundTimer.clearInterval(this.setIntervalId)
  }
  startCount() {
    // this.props.onTick(this.props.duration)
    let initialDate = Date.now()
    this.setState({
      targetDate: initialDate + this.props.duration,
      currentDate: initialDate,
    })
    this.setIntervalId = BackgroundTimer.setInterval(() => {
      let currentDate = Date.now()
      let timeRemaining = this.state.targetDate - currentDate
      this.setState({ currentDate, duration: timeRemaining })
      if (timeRemaining <= 0) this.complete()
      else this.props.onTick(timeRemaining)
    }, 1000)
  }
  resumeCount() {
    // this.props.onTick(this.props.duration)
    let initialDate = Date.now()
    this.setState({
      targetDate: initialDate + this.state.duration,
      currentDate: initialDate,
    })
    this.setIntervalId = BackgroundTimer.setInterval(() => {
      let currentDate = Date.now()
      let timeRemaining = this.state.targetDate - currentDate
      this.setState({ currentDate, duration: timeRemaining })
      if (timeRemaining <= 0) this.complete()
      else this.props.onTick(timeRemaining)
    }, 1000)
  }
  pauseCount() {
    this.stopCount()
  }
  stopCount() {
    BackgroundTimer.clearInterval(this.setIntervalId)
  }
  complete() {
    this.props.onTick(0)
    this.stopCount()
    Vibration.vibrate(500)
    this.setState({ duration: this.props.duration })
    this.props.onComplete()
  }
  render() {
    // const {} = styles

    return <View />
  }
}
//todo maybe check if first second doesn't count
//todo round onTick based on prop. countType='seconds', ms, m, h, should return array
//todo restart
//todo add pause/resume https://github.com/avid21/react-native-timer-countdown/issues/6
//todo add interval
