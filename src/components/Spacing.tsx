import React from 'react'
import { View } from 'react-native'
import Theme from '../values/Theme'

type Props = {
  xxs?: boolean
  xs?: boolean
  s?: boolean
  m?: boolean
  l?: boolean
  xl?: boolean
  xxl?: boolean
}
const Spacing = ({ xxs, xs, s, m, l, xl, xxl }: Props) => {
  let space
  if (xxs) space = Theme.sizeXXS
  if (xs) space = Theme.sizeXS
  if (s) space = Theme.sizeS
  if (m) space = Theme.sizeM
  if (l) space = Theme.sizeL
  if (xl) space = Theme.sizeXL
  if (xxl) space = Theme.sizeXXL
  return <View style={{ height: space, width: space }} />
}

export default Spacing
