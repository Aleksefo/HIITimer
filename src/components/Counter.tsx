import React, { useRef } from 'react'
import { View } from 'react-native'
import BackgroundTimer from './BackgroundTimer'
import { useDispatch, useGlobalState } from '../state/AppContext'
import CounterControls from './CounterControls'

const Counter = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const counterRef = useRef(null)

  const startCount = () => {
    dispatch({
      type: 'changeStatus',
      payload: { command: 'start' },
    })
    dispatch({
      type: 'calculateTotalTime',
    })
    counterRef.current.startCount(1000)
  }
  const pauseCount = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'changeStatus',
      payload: { command: 'pause' },
    })
  }
  const resumeCount = () => {
    counterRef.current.startCount(1000)
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
    if (
      state.currentRound === state.totalRounds &&
      state.currentSet === state.totalSets
    ) {
      dispatch({
        type: 'changeStatus',
        payload: { command: 'stop' },
      })
      dispatch({
        type: 'resetData',
      })
    } else {
      if (state.currentSet === state.totalSets) {
        dispatch({
          type: 'resetCurrentSet',
        })
        dispatch({
          type: 'increaseCurrentRound',
        })
      } else {
        dispatch({
          type: 'increaseCurrentSet',
        })
      }
      resumeCount()
    }
  }
  const onTick = timeLeft => {
    dispatch({
      type: 'setTimeSessionLeft',
      payload: { timeSessionLeft: Math.round(timeLeft / 1000) },
    })
    dispatch({
      type: 'updateTotalTime',
    })
  }
  //todo maybe improve total time calculations based on time diff(not time left) tick provides
  return (
    <View>
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
