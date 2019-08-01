import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import ButtonStepModifier from './ButtonStepModifier'

const RoundAmountSelector = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const decrement = () => {
    if (state.totalRounds > 1) {
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
    <View>
      <Text style={s.title}>{str.rounds.toUpperCase()}</Text>
      <View style={s.roundControlsContainer}>
        <ButtonStepModifier
          positive={false}
          disabled={state.totalRounds <= 1}
          onPress={() => {
            decrement()
          }}
        />
        <Text style={s.controls}>{state.totalRounds}</Text>
        <ButtonStepModifier
          onPress={() => {
            increment()
          }}
        />
      </View>
    </View>
  )
}
const s = StyleSheet.create({
  roundControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { ...Theme.fonts.h2 },
  controls: { ...Theme.fonts.h3, margin: Theme.sizeS },
})

export default RoundAmountSelector
