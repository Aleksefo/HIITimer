import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import BackgroundTimer from './BackgroundTimer'
import { useDispatch, useGlobalState } from '../state/AppContext'
import CounterControls from './CounterControls'

const Counter = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const counterRef = useRef(null)

  const startCount = () => {
    counterRef.current.startCount(100)
    dispatch({
      type: 'changeStatus',
      payload: { command: 'start' },
    })
  }
  const pauseCount = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'changeStatus',
      payload: { command: 'pause' },
    })
  }
  const resumeCount = () => {
    counterRef.current.startCount(100)
    dispatch({
      type: 'changeStatus',
      payload: { command: 'resume' },
    })
  }
  const stopCount = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'changeStatus',
      payload: { command: 'stop' },
    })
    dispatch({
      type: 'setTimeSessionLeft',
      payload: { timeSessionLeft: state.timeSession },
    })
  }
  const onComplete = () => {
    dispatch({
      type: 'changeStatus',
      payload: { command: 'stop' },
    })
    dispatch({
      type: 'setTimeSessionLeft',
      payload: { timeSessionLeft: state.timeSession },
    })
  }
  const onTick = timeRemaining => {
    dispatch({
      type: 'setTimeSessionLeft',
      payload: { timeSessionLeft: Math.round(timeRemaining / 1000) },
    })
  }

  return (
    <View>
      <Text>Counter component</Text>
      <BackgroundTimer
        duration={state.timeSessionLeft * 1000}
        onComplete={onComplete}
        onTick={timeLeft => onTick(timeLeft)}
        ref={counterRef}
      />
      <CounterControls
        startCount={startCount}
        pauseCount={pauseCount}
        resumeCount={resumeCount}
        stopCount={stopCount}
      />
    </View>
  )
}

export default Counter
