import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'

const TimeInput = props => {
  const dispatch = useDispatch()
  const state = useGlobalState()
  const [input, setInput] = useState<string | number>(
    state.setsTime[props.setNumber],
  )
  useEffect(() => {
    setInput(state.setsTime[props.setNumber])
    return () => {}
  }, [state.setsTime[props.setNumber]])

  //todo check android numerical keyboard for negatives
  const changeInput = (value: string) => {
    let number = parseInt(value)
    if (Number.isInteger(number) && number >= 0) {
      setInput(value)
    } else {
      setInput('')
    }
  }
  const checkInput = () => {
    let number
    if (typeof input === 'string') {
      number = parseInt(input)
    } else number = input
    if (Number.isInteger(number) && number >= 0) {
      dispatch({
        type: 'changeSetDuration',
        payload: {
          setNumber: props.setNumber,
          duration: number,
        },
      })
      setInput(number.toString())
    } else {
      dispatch({
        type: 'changeSetDuration',
        payload: {
          setNumber: props.setNumber,
          duration: 1,
        },
      })
      setInput('1')
    }
    dispatch({
      type: 'calculateTotalTime',
    })
  }
  return (
    <TextInput
      editable={!props.disabled}
      style={[
        props.style,
        props.disabled ? s.disabled : null,
        Theme.styled.fontFamily,
      ]}
      keyboardType={'number-pad'}
      value={input.toString()}
      onChangeText={text => {
        changeInput(text)
      }}
      onEndEditing={() => {
        checkInput()
      }}
      returnKeyType={'done'}
    />
  )
}
const s = StyleSheet.create({
  disabled: { color: Theme.colors.grey2 },
})

export default TimeInput
//todo customize inputs more https://facebook.github.io/react-native/docs/textinput.html#keyboardtype
