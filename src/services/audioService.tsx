import Sound from 'react-native-sound'

Sound.setCategory('Ambient', true)

const beep = new Sound(
  'beep.mp3',
  Sound.MAIN_BUNDLE,
  error => console.log(error), //todo replace logs with crash reporting tool
)
export const playBeep = () => {
  beep.play()
}
const beep_alt = new Sound('beep_alt.mp3', Sound.MAIN_BUNDLE, error =>
  console.log(error),
)
export const playBeepAlt = () => {
  beep_alt.setNumberOfLoops(0)
  beep_alt.play()
}
export const playBeepAltLong = () => {
  beep_alt.setNumberOfLoops(7)
  beep_alt.play()
}
export const stopBeepAlt = () => {
  beep_alt.stop()
}
