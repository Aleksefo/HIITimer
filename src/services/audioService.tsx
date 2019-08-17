import Sound from 'react-native-sound'

Sound.setCategory('Ambient', true)

const beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, error =>
  console.tron.log(error),
)
export const playBeep = () => {
  beep.play()
}
