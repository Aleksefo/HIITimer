import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useGlobalState } from '../state/AppContext'
import ButtonControls from './ButtonControls'
import str from '../values/strings'
import Theme from '../values/Theme'

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

  state.counterStatus === 'stopped'
    ? (startBtn = (
        <ButtonControls title={str.start} onPress={() => props.startCount()} />
      ))
    : null
  state.counterStatus === 'started'
    ? (pauseBtn = (
        <ButtonControls title={str.pause} onPress={() => props.pauseCount()} />
      ))
    : null
  state.counterStatus === 'paused'
    ? (resumeBtn = (
        <ButtonControls
          title={str.resume}
          onPress={() => props.resumeCount()}
        />
      ))
    : null
  if (state.counterStatus === 'paused' || state.counterStatus === 'started') {
    stopBtn = (
      <ButtonControls title={str.stop} onPress={() => props.stopCount()} />
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
    width: Theme.w,
    flex: 1,
  },
})

export default CounterControls
