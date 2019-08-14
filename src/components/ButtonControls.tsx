import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import Theme from '../values/Theme'
import Icon from 'react-native-vector-icons/AntDesign'

const ButtonControls = props => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Icon name={props.iconName} size={40} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
})
export default ButtonControls
