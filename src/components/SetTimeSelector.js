import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import TimeInput from './TimeInput'
import str from '../values/strings'
import { styled } from '../values/theme'

const SetTimeSelector = inject('counterStore')(
  observer(props => {
    const { setNumber = 1 } = props
    const { containerStyle, timeControlsContainerStyle } = styles
    let setTime = `set${setNumber}Time`
    return (
      <View style={containerStyle}>
        <Text style={styled.textTitleStyle}>{`${str.set} ${setNumber}`}</Text>
        <View style={timeControlsContainerStyle}>
          <TouchableOpacity
            onPress={() => {
              props.counterStore[setTime]--
            }}
          >
            <Text style={styled.textTitleStyle}>-</Text>
          </TouchableOpacity>
          <TimeInput type={`set${setNumber}Time`} />
          <TouchableOpacity
            onPress={() => {
              props.counterStore[setTime]++
            }}
          >
            <Text style={styled.textTitleStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }),
)

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
