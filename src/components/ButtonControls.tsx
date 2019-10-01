import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../values/Theme'
import Icon from 'react-native-vector-icons/AntDesign'

const ButtonControls = props => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Icon
        name={props.iconName}
        size={32}
        color={Theme.colors.white}
        style={{
          height: 32,
          width: 32,
        }}
        hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.primaryColor,
    width: 64,
    height: 64,
    borderRadius: 32,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
})
//todo make icon color be the same color as screen background
export default ButtonControls
