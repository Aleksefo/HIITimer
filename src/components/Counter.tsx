import React, {useEffect, useRef} from 'react'
import {Vibration, View} from 'react-native'
import BackgroundTimer from './BackgroundTimer'
import {useDispatch, useGlobalState} from '../state/AppContext'
import CounterControls from './CounterControls'
import {
  playBeep,
  playBeepAlt,
  playBeepAltLong,
  stopBeepAlt,
} from '../services/audioService'

const Counter = props => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const counterRef = useRef(null)

  useEffect(() => {
    if (
      state.counterStatus === 'started' &&
      state.timeSessionLeft !== state.timeSession
    ) {
      dispatch({
        type: 'updateTotalTime',
      })
    }
    if (
      state.counterStatus === 'started' &&
      state.timeSessionLeft <= 2 &&
      state.currentSet !== state.totalSets
    ) {
      state.volumeState === 'on' && playBeep()
      state.volumeState === 'vibro' && Vibration.vibrate(500)
    } else if (
      state.counterStatus === 'started' &&
      state.timeSessionLeft <= 2 &&
      state.currentSet === state.totalSets &&
      state.currentRound !== state.totalRounds
    ) {
      state.volumeState === 'on' && playBeepAlt()
      state.volumeState === 'vibro' && Vibration.vibrate(500)
    } else if (
      state.counterStatus === 'started' &&
      state.timeSessionLeft <= 2 &&
      state.currentSet === state.totalSets &&
      state.currentRound === state.totalRounds
    ) {
      state.volumeState === 'on' && playBeepAltLong()
      state.volumeState === 'vibro' && Vibration.vibrate(500)
    } else if (state.counterStatus === 'stopped') {
      stopBeepAlt()
    }
  }, [state.timeSessionLeft])

  const startCount = () => {
    dispatch({
      type: 'changeStatus',
      payload: {command: 'start'},
    })
    dispatch({
      type: 'calculateTotalTime',
    })
    counterRef.current.startCount(50)
  }
  const pauseCount = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'changeStatus',
      payload: {command: 'pause'},
    })
  }
  const resumeCount = () => {
    counterRef.current.startCount(50)
    dispatch({
      type: 'changeStatus',
      payload: {command: 'resume'},
    })
  }
  const stopCount = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'changeStatus',
      payload: {command: 'stop'},
    })
    dispatch({
      type: 'resetData',
    })
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  const onComplete = () => {
    if (
      state.currentRound === state.totalRounds &&
      state.currentSet === state.totalSets
    ) {
      stopCount()
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
      payload: {timeSessionLeft: Math.round(timeLeft / 1000)},
    })
  }
  //todo maybe improve total time calculations based on time diff(not time left) tick provides
  return (
    <View style={props.style}>
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
