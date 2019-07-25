import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SetAmountSelector from './SetAmountSelector'
import SetTimeSelector from './SetTimeSelector'
import RoundAmountSelector from './RoundAmountSelector'
import str from '../values/strings'
import Theme from '../values/Theme'

const SessionConfigurator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sets}>{str.sets}</Text>
      <View style={styles.selectorContainer}>
        <SetAmountSelector amount={2} />
        <SetAmountSelector amount={3} />
        <SetAmountSelector amount={4} />
      </View>
      <SetTimeSelector setNumber={1} />
      <SetTimeSelector setNumber={2} />
      <SetTimeSelector setNumber={3} />
      <SetTimeSelector setNumber={4} />
      <RoundAmountSelector />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  selectorContainer: { flexDirection: 'row', alignItems: 'center' },
  sets: {
    ...Theme.fonts.h3,
  },
})

export default SessionConfigurator
