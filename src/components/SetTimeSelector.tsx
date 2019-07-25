import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'

const SetTimeSelector = props => {
  const { setNumber = 1 } = props
  const dispatch = useDispatch()
  const state = useGlobalState()

  const decrement = () => {
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
      <Text style={s.title}>{`${str.set.toUpperCase()} ${setNumber}`}</Text>
      <View style={s.timeControlsContainer}>
        <TouchableOpacity
          disabled={state.setsTime[setNumber - 1] <= 1}
          onPress={() => {
            decrement()
          }}
        >
          <Text style={s.controls}>-</Text>
        </TouchableOpacity>
        <TimeInput style={s.controls} setNumber={setNumber - 1} />
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { ...Theme.fonts.bodyLarge },
  controls: { ...Theme.fonts.body, marginHorizontal: Theme.sizeS },
})

export default SetTimeSelector
