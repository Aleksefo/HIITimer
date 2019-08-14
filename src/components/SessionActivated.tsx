import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import { Spacing } from './index'
import CircularProgress from './CircularProgress'

const SessionActivated = () => {
  const {
    timeSession,
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
    <View style={s.container}>
      <CircularProgress
        timeSession={timeSession}
        timeSessionLeft={timeSessionLeft}
      />
      <Text style={s.time}>{`${minutes}:${seconds}`}</Text>
      <Text style={s.title}>{`${str.set} ${currentSet}/${totalSets}`}</Text>
      <Text
        style={s.title}
      >{`${str.round} ${currentRound}/${totalRounds}`}</Text>
      <Spacing xl />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  title: { ...Theme.fonts.h3 },
  time: { ...Theme.fonts.h1 },
})

export default SessionActivated
