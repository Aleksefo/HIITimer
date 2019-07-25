import React from 'react'
import { StyleSheet, Text } from 'react-native'
import str from '../values/strings'
import { useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'

const SessionActivated = () => {
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
    <>
      <Text style={s.title}>{`${str.set} ${currentSet}/${totalSets}`}</Text>
      <Text style={s.title}>{`${minutes}:${seconds}`}</Text>
      <Text
        style={s.title}
      >{`${str.round} ${currentRound}/${totalRounds}`}</Text>
    </>
  )
}

const s = StyleSheet.create({
  title: { ...Theme.fonts.bodyLarge },
  titled: { ...Theme.fonts.bodyLarge },
})

export default SessionActivated
