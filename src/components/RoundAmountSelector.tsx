import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'

const RoundAmountSelector = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const decrement = () => {
    dispatch({
      type: 'changeRoundsAmount',
      payload: {
        amount: state.totalRounds - 1,
      },
    })
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  const increment = () => {
    dispatch({
      type: 'changeRoundsAmount',
      payload: {
        amount: state.totalRounds + 1,
      },
    })
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  const { roundControlsContainerStyle } = styles
  return (
    <View>
      <Text>{`${str.rounds}`}</Text>
      <View style={roundControlsContainerStyle}>
        <TouchableOpacity
          disabled={state.totalRounds <= 1}
          onPress={() => {
            decrement()
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{state.totalRounds}</Text>
        <TouchableOpacity
          onPress={() => {
            increment()
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  roundControlsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default RoundAmountSelector
