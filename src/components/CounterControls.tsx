import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useGlobalState } from '../state/AppContext'

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
    ? (startBtn = <Button title={'start'} onPress={() => props.startCount()} />)
    : null
  state.counterStatus === 'started'
    ? (pauseBtn = <Button title={'pause'} onPress={() => props.pauseCount()} />)
    : null
  state.counterStatus === 'paused'
    ? (resumeBtn = (
        <Button title={'resume'} onPress={() => props.resumeCount()} />
      ))
    : null
  if (state.counterStatus === 'paused' || state.counterStatus === 'started') {
    stopBtn = <Button title={'stop'} onPress={() => props.stopCount()} />
  }
  const {} = styles
  return (
    <View>
      <Text>CounterControls component</Text>
      {startBtn}
      {pauseBtn}
      {resumeBtn}
      {stopBtn}
    </View>
  )
}

const styles = StyleSheet.create({
  styleTop: {},
})

export default CounterControls
