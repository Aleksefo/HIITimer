import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import str from '../values/strings'
import { inject, observer } from 'mobx-react'

const SessionActivated = inject('counterStore')(
  observer(props => {
    const {} = styles
    const {
      timeSessionLeft,
      timeSession,
      counterStatus,
      currentRound,
      totalRounds,
      currentSet,
      totalTimeLeft,
      totalSets,
      totalTime,
    } = props.counterStore
    let minutes = Math.floor(timeSessionLeft / 60)
    if (minutes < 10) minutes = '0' + minutes
    let seconds = timeSessionLeft % 60
    if (seconds < 10) seconds = '0' + seconds
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{`${str.set} ${currentSet}/${totalSets}`}</Text>
        <Text style={{ fontSize: 20 }}>{`${minutes}:${seconds}`}</Text>
        <Text style={{ fontSize: 20 }}>{`${str.round} ${currentRound}/${totalRounds}`}</Text>
        {/*<Text style={{fontSize: 20}}>timeSession {timeSession}</Text>*/}
      </View>
    )
  }),
)

const styles = StyleSheet.create({
  styleTop: {},
})

export default SessionActivated
