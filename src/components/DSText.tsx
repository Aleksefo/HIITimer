import React from 'react'
import { Text } from 'react-native'
import Theme from '../values/Theme'

const DSText = props => {
  const textStyle = props.disabled
    ? { color: Theme.colors.grey2 }
    : { color: Theme.colors.black }
  return <Text {...props} style={[props.style, textStyle]} />
}

export default DSText
