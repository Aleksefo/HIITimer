import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ss, styled } from '../values/theme'
import { useDispatch } from '../state/AppContext'

const SetAmountSelector = props => {
  const dispatch = useDispatch()

  const { selectorStyle } = styles
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'changeSetAmount',
          payload: { amount: props.amount },
        })
      }}
    >
      <Text style={[styled.textTitleStyle, selectorStyle]}>{props.amount}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  selectorStyle: { fontSize: ss(18), margin: ss(5) },
})

export default SetAmountSelector
