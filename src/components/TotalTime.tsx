import React from 'react'
import { StyleSheet, View } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import { AnimatedText, DSText } from './index'

const TotalTime = () => {
  const { counterStatus, totalTimeLeft } = useGlobalState()
  let minutes: number | string
  let seconds: number | string
  minutes = Math.floor(totalTimeLeft / 60)
  if (minutes < 10) minutes = '0' + minutes
  seconds = totalTimeLeft % 60
  if (seconds < 10) seconds = '0' + seconds
  return (
    <View style={styles.container}>
      <DSText style={styles.time}>{`${
        counterStatus === 'stopped' ? str.timeTotal : str.timeLeft
      }  `}</DSText>
      <AnimatedText trigger={counterStatus === 'stopped' && totalTimeLeft}>
        <DSText style={styles.time}>{`${minutes}:${seconds}`}</DSText>
      </AnimatedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  time: {
    ...Theme.fonts.h3,
  },
})

export default TotalTime
