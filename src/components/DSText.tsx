import React from 'react'
import {Text} from 'react-native'
import Theme from '../values/Theme'
import {useGlobalState} from '../state/AppContext'

type Props = {
  disabled?: boolean
  style?: Object
  children: string | number
}

const DSText = (props: Props) => {
  const state = useGlobalState()

  let textStyle = {fontFamily: null, color: null}
  textStyle.color = props.disabled ? state.theme.grey2 : state.theme.text
  return (
    <Text
      {...props}
      style={[props.style, textStyle, Theme.styled.fontFamily]}
    />
  )
}

export default DSText
