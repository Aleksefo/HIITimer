import React from 'react'
import { Text, StyleSheet } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'

const TotalTime = () => {
  const { counterStatus, totalTimeLeft } = useGlobalState()
  let minutes: number | string
  let seconds: number | string
  minutes = Math.floor(totalTimeLeft / 60)
  if (minutes < 10) minutes = '0' + minutes
  seconds = totalTimeLeft % 60
  if (seconds < 10) seconds = '0' + seconds
  return (
    <Text style={styles.time}>{`${
      counterStatus === 'stopped' ? str.timeTotal : str.timeLeft
    } ${minutes}:${seconds}`}</Text>
  )
}

const styles = StyleSheet.create({
  time: {
    ...Theme.fonts.h3,
  },
})

export default TotalTime
