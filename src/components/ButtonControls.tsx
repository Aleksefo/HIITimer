import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import Theme from '../values/Theme'
// import Icon from 'react-native-vector-icons/Ionicons'

const ButtonControls = props => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      {/*<Icon name={props.iconName} size={40} color="black" />*/}
      <Text style={styles.buttonTitle}>{props.title}</Text>
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
  buttonTitle: {
    ...Theme.fonts.h1,
  },
})
// todo add styles or clear it
export default ButtonControls
