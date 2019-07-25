import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'

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
  return (
    <>
      <Text style={s.title}>{`${str.rounds}`}</Text>
      <View style={s.roundControlsContainer}>
        <TouchableOpacity
          disabled={state.totalRounds <= 1}
          onPress={() => {
            decrement()
          }}
        >
          <Text style={s.controls}>-</Text>
        </TouchableOpacity>
        <Text style={s.controls}>{state.totalRounds}</Text>
        <TouchableOpacity
          onPress={() => {
            increment()
          }}
        >
          <Text style={s.controls}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
const s = StyleSheet.create({
  roundControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { ...Theme.fonts.bodyLarge },
  controls: { ...Theme.fonts.body, marginHorizontal: Theme.sizeS },
})

export default RoundAmountSelector
