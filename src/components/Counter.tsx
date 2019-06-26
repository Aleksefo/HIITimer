import React, { useRef } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import BackgroundTimer from './BackgroundTimer'
import { useDispatch, useGlobalState } from '../state/AppContext'

const Counter = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const counterRef = useRef(null)
  const decrement = () => {
    dispatch({ type: 'decrement' })
  }
  const start = () => {
    if (counterRef) {
      counterRef.current.startCount(() => decrement(), 500)
    }
  }
  const onComplete = () => {
    console.log('Counter, onComplete')
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
      <Button title={'stop'} onPress={() => counterRef.current.stopCount()} />
    </View>
  )
}

const styles = StyleSheet.create({
  styleTop: {},
})

export default Counter
