import React from 'react'
import { Text } from 'react-native'
import Theme from '../values/Theme'

type Props = {
  disabled: boolean
  style?: Object
}

const DSText = (props: Props) => {
  let textStyle = { fontFamily: null, color: null }
  textStyle.color = props.disabled ? Theme.colors.grey2 : Theme.colors.black
  return (
    <Text
      {...props}
      style={[props.style, textStyle, Theme.styled.fontFamily]}
    />
  )
}

export default DSText
