import React from 'react'
import { View, Text } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'

const TotalTime = () => {
  const { counterStatus, totalTimeLeft } = useGlobalState()
  let minutes: number | string
  let seconds: number | string
  minutes = Math.floor(totalTimeLeft / 60)
  if (minutes < 10) minutes = '0' + minutes
  seconds = totalTimeLeft % 60
  if (seconds < 10) seconds = '0' + seconds
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{`${
        counterStatus === 'stopped' ? str.timeTotal : str.timeLeft
      } ${minutes}:${seconds}`}</Text>
    </View>
  )
}

export default TotalTime
