import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ss, styled } from '../values/theme'
import { useDispatch, useGlobalState } from '../state/AppContext'

const SetAmountSelector = props => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  const selectedStyle =
    state.totalSets === props.amount ? styles.selected : styles.notSelected
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'changeSetAmount',
          payload: { amount: props.amount },
        })
        dispatch({
          type: 'calculateTotalTime',
        })
      }}
    >
      <Text style={selectedStyle}>{props.amount}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  notSelected: {},
  selected: { fontWeight: 'bold' },
})

export default SetAmountSelector
