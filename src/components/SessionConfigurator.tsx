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
      <View style={styles.upperContainer}>
        <View style={styles.setContainer}>
          <Text style={styles.setsTitle}>{str.sets.toUpperCase()}</Text>
          <View style={styles.selectorContainer}>
            <SetAmountSelector amount={2} />
            <SetAmountSelector amount={3} />
            <SetAmountSelector amount={4} />
          </View>
        </View>
        <RoundAmountSelector />
      </View>
      <View style={styles.setsContainer}>
        <SetTimeSelector setNumber={1} />
        <Spacing l />
        <SetTimeSelector setNumber={2} />
        <Spacing l />
        <SetTimeSelector setNumber={3} />
        <Spacing l />
        <SetTimeSelector setNumber={4} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flex: 1,
  },
  setContainer: {
    alignItems: 'center',
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setsTitle: {
    ...Theme.fonts.h2,
  },
  setsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: Theme.sizeXL,
  },
})

export default SessionConfigurator
