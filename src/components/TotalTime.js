import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { inject, observer } from 'mobx-react'
import str from '../values/strings'

const TotalTime = inject('counterStore')(
  observer(props => {
    // const {} = styles
    const { counterStatus, totalTime, totalTimeLeft } = props.counterStore
    let minutes = Math.floor((counterStatus === 'stopped' ? totalTime : totalTimeLeft) / 60)
    if (minutes < 10) minutes = '0' + minutes
    let seconds = (counterStatus === 'stopped' ? totalTime : totalTimeLeft) % 60
    if (seconds < 10) seconds = '0' + seconds
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{`${
          counterStatus === 'stopped' ? str.timeTotal : str.timeLeft
        } ${minutes}:${seconds}`}</Text>
      </View>
    )
  }),
)

// const styles = StyleSheet.create({
// 	styleTop: {},
// })

export default TotalTime
