import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { styled } from '../values/theme'
import { useDispatch, useGlobalState } from '../state/AppContext'

const TimeInput = props => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const { containerStyle } = styles
  return (
    <View style={containerStyle}>
      <TextInput
        style={styled.textTitleStyle}
        keyboardType={'numeric'}
        placeholder={state.setsTime[props.setNumber].toString()}
        onChangeText={text => {
          dispatch({
            type: 'changeSetDuration',
            payload: {
              setNumber: props.setNumber,
              duration: parseInt(text),
            },
          })
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
