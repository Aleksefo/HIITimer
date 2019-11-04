import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {useDispatch, useGlobalState} from '../state/AppContext'
import Theme from '../values/Theme'
import {AnimatedText, DSText} from './index'

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
          payload: {amount: props.amount},
        })
        dispatch({
          type: 'calculateTotalTime',
        })
      }}
      hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}>
      <AnimatedText trigger={state.totalSets === props.amount}>
        <DSText style={selectedStyle}>{props.amount}</DSText>
      </AnimatedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  notSelected: {...Theme.fonts.h3},
  selected: {
    ...Theme.fonts.h3,
    fontWeight: 'bold',
  },
})

export default SetAmountSelector
