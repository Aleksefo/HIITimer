import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useGlobalState } from '../state/AppContext'

const ButtonControls = props => {
  const state = useGlobalState()

  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: state.theme.primary,
          shadowColor: state.theme.primary,
        },
        styles.button,
        props.style,
      ]}
      hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
    >
      <Icon
        name={props.iconName}
        size={32}
        color={state.theme.white}
        style={{
          height: 32,
          width: 32,
        }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
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
