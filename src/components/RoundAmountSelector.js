import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { styled } from '../values/theme'

const RoundAmountSelector = inject('counterStore')(
  observer(props => {
    const { roundControlsContainerStyle } = styles
    return (
      <View>
        <Text style={styled.textTitleStyle}>{`${str.rounds}`}</Text>
        <View style={roundControlsContainerStyle}>
          <TouchableOpacity
            onPress={() => {
              props.counterStore.totalRounds--
            }}
          >
            <Text style={styled.textTitleStyle}>-</Text>
          </TouchableOpacity>
          <TimeInput type={`totalRounds`} />
          <TouchableOpacity
            onPress={() => {
              props.counterStore.totalRounds++
            }}
          >
            <Text style={styled.textTitleStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }),
)

const styles = StyleSheet.create({
  roundControlsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default RoundAmountSelector
