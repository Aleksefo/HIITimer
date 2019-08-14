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
  return (
    <View style={s.container}>
      <CircularProgress
        timeSession={timeSession}
        timeSessionLeft={timeSessionLeft}
      />
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
})

export default SessionActivated
