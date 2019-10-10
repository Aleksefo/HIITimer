import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Theme from '../values/Theme'
const SoundControls = props => {
  return (
    <>
      <TouchableOpacity
        {...props}
        style={[props.style]}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
      >
        <Icon
          name={props.icon}
          size={Theme.sizeXL}
          color={Theme.colors.black}
        />
      </TouchableOpacity>
    </>
  )
}

export default SoundControls
