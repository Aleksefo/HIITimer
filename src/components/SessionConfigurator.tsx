import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SetAmountSelector from './SetAmountSelector'
import SetTimeSelector from './SetTimeSelector'
import RoundAmountSelector from './RoundAmountSelector'
import str from '../values/strings'
import Theme from '../values/Theme'
import { Spacing } from './index'

const SessionConfigurator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sets}>{str.sets.toUpperCase()}</Text>
      <View style={styles.selectorContainer}>
        <SetAmountSelector amount={2} />
        <SetAmountSelector amount={3} />
        <SetAmountSelector amount={4} />
      </View>
      <Spacing s />
      <RoundAmountSelector />
      <Spacing m />
      <SetTimeSelector setNumber={1} />
      <Spacing s />
      <SetTimeSelector setNumber={2} />
      <Spacing s />
      <SetTimeSelector setNumber={3} />
      <Spacing s />
      <SetTimeSelector setNumber={4} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  selectorContainer: { flexDirection: 'row', alignItems: 'center' },
  sets: {
    ...Theme.fonts.h2,
  },
})

export default SessionConfigurator
