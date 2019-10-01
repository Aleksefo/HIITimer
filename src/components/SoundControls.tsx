import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Theme from '../values/Theme'
const SoundControls = props => {
  const iconName = () => {
    if (props.volumeState === 'on') return 'volume-up'
    else if (props.volumeState === 'vibro') return 'vibration'
    else return 'volume-off'
  }
  return (
    <>
      <TouchableOpacity
        {...props}
        style={[props.style]}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
      >
        <Icon
          name={iconName()}
          size={Theme.sizeXL}
          color={Theme.colors.black}
        />
      </TouchableOpacity>
    </>
  )
}

export default SoundControls
