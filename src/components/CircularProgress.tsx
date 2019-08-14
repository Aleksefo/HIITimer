import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Theme from '../values/Theme'

const CircularProgress = ({ timeSession, timeSessionLeft }) => {
  const fillMultiplier = 100 / timeSession
  const fill = fillMultiplier * timeSessionLeft
  return (
    <AnimatedCircularProgress
      size={200}
      width={3}
      fill={fill}
      tintColor="#00e0ff"
      backgroundColor="#3d5875"
    >
      {() => <Text>{timeSessionLeft}</Text>}
    </AnimatedCircularProgress>
  )
}

const styles = StyleSheet.create({
  styleTop: {},
})

export default CircularProgress
