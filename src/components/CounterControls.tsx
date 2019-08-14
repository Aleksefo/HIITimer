import React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { useGlobalState } from '../state/AppContext'
import ButtonControls from './ButtonControls'
import str from '../values/strings'

type Props = {
  startCount: () => void
  pauseCount: () => void
  resumeCount: () => void
  stopCount: () => void
}
const CounterControls = (props: Props) => {
  const state = useGlobalState()
  let startBtn
  let pauseBtn
  let resumeBtn
  let stopBtn

  const showStopAlert = () => {
    Alert.alert(
      str.stopAlertTitle,
      null,
      [
        {
          text: str.stopAlertContinue,
          onPress: () => {},
          style: 'cancel',
        },
        { text: str.stopAlertStop, onPress: () => props.stopCount() },
      ],
      { cancelable: true },
    )
  }

  state.counterStatus === 'stopped'
    ? (startBtn = (
        <ButtonControls iconName="right" onPress={() => props.startCount()} />
      ))
    : null
  state.counterStatus === 'started'
    ? (pauseBtn = (
        <ButtonControls iconName="pause" onPress={() => props.pauseCount()} />
      ))
    : null
  state.counterStatus === 'paused'
    ? (resumeBtn = (
        <ButtonControls iconName="right" onPress={() => props.resumeCount()} />
      ))
    : null
  if (state.counterStatus === 'paused' || state.counterStatus === 'started') {
    stopBtn = (
      <ButtonControls iconName="close" onPress={() => showStopAlert()} />
    )
  }
  return (
    <View style={s.container}>
      {startBtn}
      {pauseBtn}
      {resumeBtn}
      {stopBtn}
    </View>
  )
}
const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
})

export default CounterControls
