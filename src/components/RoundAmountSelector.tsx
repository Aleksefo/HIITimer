import React from 'react'
import {View, StyleSheet} from 'react-native'
import {useDispatch, useGlobalState} from '../state/AppContext'
import Theme from '../values/Theme'
import ButtonStepModifier from './ButtonStepModifier'
import {DSText, AnimatedText} from './index'

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
    <View style={s.roundControlsContainer}>
      <ButtonStepModifier
        positive={false}
        disabled={state.totalRounds <= 1}
        onPress={() => {
          decrement()
        }}
      />
      <AnimatedText trigger={state.totalRounds}>
        <DSText style={s.controls}>{state.totalRounds}</DSText>
      </AnimatedText>
      <ButtonStepModifier
        onPress={() => {
          increment()
        }}
      />
    </View>
  )
}
const s = StyleSheet.create({
  roundControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  controls: {
    ...Theme.fonts.h3,
    margin: Theme.sizeS,
    paddingHorizontal: Theme.sizeS,
    width: Theme.sizeXXL,
    textAlign: 'center',
  },
})

export default RoundAmountSelector
