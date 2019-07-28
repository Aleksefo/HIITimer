import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../values/Theme'

type Props = {
  positive?: boolean
  disabled?: boolean
  onPress: () => void
}

const ButtonStepModifier = ({ positive = true, disabled, onPress }: Props) => {
  const renderIcon = positive ? (
    <TouchableOpacity onPress={onPress}>
      <Text style={s.controls}>+</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Text style={[s.controls, disabled ? s.disabled : null]}>-</Text>
    </TouchableOpacity>
  )
  return <>{renderIcon}</>
}

const s = StyleSheet.create({
  controls: { ...Theme.fonts.body, marginHorizontal: Theme.sizeS },
  disabled: { color: Theme.colors.inactive },
})

export default ButtonStepModifier
