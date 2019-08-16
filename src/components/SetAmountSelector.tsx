import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'
import Theme from '../values/Theme'
import { DSText } from './index'

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
      <DSText style={selectedStyle}>{props.amount}</DSText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  notSelected: { ...Theme.fonts.h3, margin: Theme.sizeS },
  selected: {
    ...Theme.fonts.h3,
    margin: Theme.sizeS,
    fontWeight: 'bold',
  },
})

export default SetAmountSelector
