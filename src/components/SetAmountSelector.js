import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { inject, observer } from 'mobx-react'
import { ss, styled } from '../values/theme'

const SetAmountSelector = inject('counterStore')(
  observer(props => {
    const { selectorStyle } = styles
    return (
      <TouchableOpacity
        onPress={() => {
          props.counterStore.totalSets = parseInt(props.setAmount)
          //to update timeSessionLeft on initial values set
        }}
      >
        <Text style={[styled.textTitleStyle, selectorStyle]}>{props.setAmount}</Text>
      </TouchableOpacity>
    )
  }),
)

const styles = StyleSheet.create({
  selectorStyle: { fontSize: ss(18), margin: ss(5) },
})

export default SetAmountSelector
