import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import ButtonStepModifier from './ButtonStepModifier'
import { Spacing } from './index'

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
  return (
    <>
      <View style={s.timeControlsContainer}>
        <Text style={s.title}>{`${str.set.toUpperCase()} ${setNumber}`}</Text>
        <Spacing m />
        <ButtonStepModifier
          positive={false}
          disabled={state.setsTime[setNumber - 1] <= 1}
          onPress={() => {
            decrement()
          }}
        />
        <TimeInput style={s.controls} setNumber={setNumber - 1} />
        <ButtonStepModifier
          onPress={() => {
            increment()
          }}
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
