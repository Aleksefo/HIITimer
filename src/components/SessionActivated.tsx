import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'

const SessionActivated = () => {
  const {} = styles
  const {
    timeSessionLeft,
    currentRound,
    totalRounds,
    currentSet,
    totalSets,
  } = useGlobalState()
  let minutes: number | string
  let seconds: number | string
  minutes = Math.floor(timeSessionLeft / 60)
  if (minutes < 10) minutes = '0' + minutes
  seconds = timeSessionLeft % 60
  if (seconds < 10) seconds = '0' + seconds
  return (
    <View>
      <Text style={{ fontSize: 20 }}>
        {`${str.set} ${currentSet}/${totalSets}`}
      </Text>
      <Text style={{ fontSize: 20 }}>{`${minutes}:${seconds}`}</Text>
      <Text
        style={{ fontSize: 20 }}
      >{`${str.round} ${currentRound}/${totalRounds}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  styleTop: {},
})

export default SessionActivated
