import { Dimensions, Platform } from 'react-native'
import fonts from './typography'
import colors from './colors'

const window = Dimensions.get('window')

// const SCALE = 375 // constant, 375 is standard width of  iphone 6 / 7 / 8
// export const ss = fontSize => {
//   // Scaled Font Size
//   const ratio = fontSize / SCALE // get ratio based on your standard scale
//   return Math.round(ratio * w)
// }

export const styled = {
  fontFamily: {
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'RobotoMono-Regular',
  },
}

const Theme = {
  w: window.width,
  h: window.height,
  colors,
  fonts,
  styled,
  // For components that don't scale, like Icon, Checkbox etc
  sizeXXS: 2,
  sizeXS: 4,
  sizeS: 8,
  sizeM: 16,
  sizeL: 24,
  sizeXL: 32,
  sizeXXL: 64,
}

export default Theme
