import React from 'react'
import { View, StyleSheet } from 'react-native'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import ButtonStepModifier from './ButtonStepModifier'
import { AnimatedText, DSText, Spacing } from './index'

const SetTimeSelector = props => {
  const { setNumber = 1 } = props
  const dispatch = useDispatch()
  const state = useGlobalState()

  const decrement = () => {
    if (state.setsTime[setNumber - 1] > 1) {
      dispatch({
        type: 'changeSetDuration',
        payload: {
          setNumber: setNumber - 1,
          duration: state.setsTime[setNumber - 1] - 1,
        },
      })
      dispatch({
        type: 'calculateTotalTime',
      })
    }
  }
  const increment = () => {
    dispatch({
      type: 'changeSetDuration',
      payload: {
        setNumber: setNumber - 1,
        duration: state.setsTime[setNumber - 1] + 1,
      },
    })
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  const disabled = state.totalSets < setNumber
  return (
    <>
      <View style={s.timeControlsContainer}>
        <DSText
          style={s.title}
          disabled={disabled}
        >{`${str.set.toUpperCase()} ${setNumber}`}</DSText>
        <Spacing m />
        <ButtonStepModifier
          positive={false}
          disabled={state.setsTime[setNumber - 1] <= 1 || disabled}
          onPress={() => {
            decrement()
          }}
        />
        <AnimatedText trigger={state.setsTime[setNumber - 1]}>
          <TimeInput
            style={s.controls}
            setNumber={setNumber - 1}
            disabled={disabled}
          />
        </AnimatedText>
        <ButtonStepModifier
          onPress={() => {
            increment()
          }}
          disabled={disabled}
        />
      </View>
    </>
  )
}

const s = StyleSheet.create({
  timeControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { ...Theme.fonts.bodyLarge },
  controls: {
    ...Theme.fonts.bodyLarge,
    textAlign: 'center',
    padding: 0,
    margin: 0,
    paddingHorizontal: Theme.sizeS,
    width: Theme.sizeXXL,
  },
})

export default SetTimeSelector
