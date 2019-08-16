import React from 'react'
import { View, StyleSheet } from 'react-native'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import ButtonStepModifier from './ButtonStepModifier'
import { DSText } from './index'

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
      <DSText style={s.title}>{str.rounds.toUpperCase()}</DSText>
      <View style={s.roundControlsContainer}>
        <ButtonStepModifier
          positive={false}
          disabled={state.totalRounds <= 1}
          onPress={() => {
            decrement()
          }}
        />
        <DSText style={s.controls}>{state.totalRounds}</DSText>
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
