import { Dimensions, StyleSheet } from 'react-native'

export const colors = {
  primaryColor: '#7f00ff', // Port Gore
  accentColor: '#ffff01', // Carrot Orange
  error: '#D2473C',
  inactive: '#b5b5b5',
  text: '#000000',
}

export let w = Dimensions.get('screen').width
export let h = Dimensions.get('screen').height

const SCALE = 375 // constant, 375 is standard width of  iphone 6 / 7 / 8
export const ss = fontSize => {
  // Scaled Font Size
  const ratio = fontSize / SCALE // get ratio based on your standard scale
  return Math.round(ratio * w)
}

export const styled = StyleSheet.create({
  textTitleStyle: { color: colors.text, fontSize: ss(24), fontWeight: '100' },
})
