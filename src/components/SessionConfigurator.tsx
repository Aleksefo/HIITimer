import React from 'react'
import {View, StyleSheet} from 'react-native'
import SetAmountSelector from './SetAmountSelector'
import SetTimeSelector from './SetTimeSelector'
import RoundAmountSelector from './RoundAmountSelector'
import str from '../values/strings'
import Theme from '../values/Theme'
import {DSText, Spacing} from './index'

const SessionConfigurator = () => {
  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <DSText style={s.title}>{str.sets.toUpperCase()}</DSText>
        <DSText style={s.title}>{str.rounds.toUpperCase()}</DSText>
      </View>
      <View style={s.titleContainer}>
        <View style={s.selectorContainer}>
          <SetAmountSelector amount={2} />
          <SetAmountSelector amount={3} />
          <SetAmountSelector amount={4} />
        </View>
        <RoundAmountSelector />
      </View>
      <View style={s.setsContainer}>
        <SetTimeSelector setNumber={1} />
        <Spacing m />
        <SetTimeSelector setNumber={2} />
        <Spacing m />
        <SetTimeSelector setNumber={3} />
        <Spacing m />
        <SetTimeSelector setNumber={4} />
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectorContainer: {
    flexDirection: 'row',
    width: '30%',
    marginVertical: Theme.sizeS,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...Theme.fonts.h2,
  },
  setsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: Theme.sizeXL,
    width: '100%',
  },
})

export default SessionConfigurator
