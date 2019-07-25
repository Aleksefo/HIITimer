import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'

const TimeInput = props => {
  const dispatch = useDispatch()
  const state = useGlobalState()
  //todo check android numerical keyboard for negatives
  const changeInput = (value: string) => {
    let number = parseInt(value)
    if (Number.isInteger(number) && number >= 0) {
      dispatch({
        type: 'changeSetDuration',
        payload: {
          setNumber: props.setNumber,
          duration: number,
        },
      })
    } else {
      dispatch({
        type: 'changeSetDuration',
        payload: {
          setNumber: props.setNumber,
          duration: 1,
        },
      })
    }
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  const { containerStyle } = styles
  return (
    <View style={containerStyle}>
      <TextInput
        keyboardType={'numeric'}
        value={state.setsTime[props.setNumber].toString()}
        onChangeText={text => {
          changeInput(text)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TimeInput
//todo customize inputs more https://facebook.github.io/react-native/docs/textinput.html#keyboardtype
