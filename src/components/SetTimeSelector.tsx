import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { styled } from '../values/theme'
import { useDispatch, useGlobalState } from '../state/AppContext'

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
  const { containerStyle, timeControlsContainerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={styled.textTitleStyle}>{`${str.set} ${setNumber}`}</Text>
      <View style={timeControlsContainerStyle}>
        <TouchableOpacity
          disabled={state.setsTime[setNumber - 1] <= 1}
          onPress={() => {
            decrement()
          }}
        >
          <Text style={styled.textTitleStyle}>-</Text>
        </TouchableOpacity>
        <TimeInput setNumber={setNumber - 1} />
        <TouchableOpacity
          onPress={() => {
            increment()
          }}
        >
          <Text style={styled.textTitleStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
  },
  timeControlsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SetTimeSelector
