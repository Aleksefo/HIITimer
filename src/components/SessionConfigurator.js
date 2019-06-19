import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SetAmountSelector from './SetAmountSelector'
import SetTimeSelector from './SetTimeSelector'
import RoundAmountSelector from './RoundAmountSelector'
import str from '../values/strings'
import { colors, ss, styled } from '../values/theme'

const SessionConfigurator = () => {
  const { containerStyle, selectorContainerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={styled.textTitleStyle}>{str.sets}</Text>
      <View style={selectorContainerStyle}>
        <SetAmountSelector setAmount={2} />
        <SetAmountSelector setAmount={3} />
        <SetAmountSelector setAmount={4} />
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
  containerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  selectorContainerStyle: { flexDirection: 'row', alignItems: 'center' },
})

export default SessionConfigurator
