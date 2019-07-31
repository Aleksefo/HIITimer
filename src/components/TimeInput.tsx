import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'

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
    console.log('TimeInput, checkInput', input)
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
      style={props.style}
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

export default TimeInput
//todo customize inputs more https://facebook.github.io/react-native/docs/textinput.html#keyboardtype
