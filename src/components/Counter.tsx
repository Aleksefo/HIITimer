import React, { useRef } from 'react'
import { View, Text, Button } from 'react-native'
import BackgroundTimer from './BackgroundTimer'
import { useDispatch, useGlobalState } from '../state/AppContext'

const Counter = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const counterRef = useRef(null)

  const start = () => {
    counterRef.current.startCount(100)
  }
  const pause = () => {
    counterRef.current.stopCount()
  }
  const stop = () => {
    counterRef.current.stopCount()
    dispatch({
      type: 'setTimeSessionLeft',
      payload: { timeSessionLeft: state.timeSession },
    })
  }
  const onComplete = () => {
    console.log('Counter, onComplete')
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
      <Button title={'start'} onPress={() => start()} />
      <Button title={'pause'} onPress={() => pause()} />
      <Button title={'stop'} onPress={() => stop()} />
    </View>
  )
}

export default Counter
