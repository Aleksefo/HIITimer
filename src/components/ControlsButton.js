import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import str from '../values/strings'
import { inject, observer } from 'mobx-react'
// import Icon from 'react-native-vector-icons/Ionicons'

const ControlsButton = inject('counterStore')(
  observer(props => {
    const { buttonTitleStyle } = styles
    return (
      <TouchableOpacity {...props} style={[styles.button, props.style]}>
        {/*<Icon name={props.iconName} size={40} color="black" />*/}
        <Text style={buttonTitleStyle}>{props.children}</Text>
      </TouchableOpacity>
    )
  }),
)

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTitleStyle: {
    fontSize: 40,
    color: 'black',
  },
})
// todo add styles or clear it
export default ControlsButton
