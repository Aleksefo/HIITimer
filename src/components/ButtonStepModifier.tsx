import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../values/Theme'
import useInterval from '../state/useInterval'
import Icon from 'react-native-vector-icons/AntDesign'

type Props = {
  positive?: boolean
  disabled?: boolean
  onPress: () => void
}

const ButtonStepModifier = ({ positive = true, disabled, onPress }: Props) => {
  const [pressed, setPressed] = useState(false)
  const [delay, setDelay] = useState(500)

  useInterval(disabled ? () => {} : onPress, pressed ? delay : null)

  // Make it faster every second!
  useInterval(
    () => {
      if (delay > 100) {
        setDelay(delay / 1.5)
      }
    },
    pressed ? 500 : null,
  )
  const renderIcon = positive ? (
    <Icon
      name={'plus'}
      size={Theme.sizeM}
      color={disabled ? Theme.colors.grey2 : Theme.colors.black}
    />
  ) : (
    <Icon
      name={'minus'}
      size={Theme.sizeM}
      color={disabled ? Theme.colors.grey2 : Theme.colors.black}
    />
  )
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => {
        setPressed(false)
        setDelay(500)
      }}
      disabled={disabled}
    >
      {renderIcon}
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  controls: { ...Theme.fonts.body, marginHorizontal: Theme.sizeS },
  disabled: { color: Theme.colors.grey2 },
})

export default ButtonStepModifier
