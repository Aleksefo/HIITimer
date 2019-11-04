import Reactotron from 'reactotron-react-native'

Reactotron.configure() // controls connection & communication settings
  .useReactNative({}) // add all built-in react native plugins
  .connect() // let's connect!
declare global {
  interface Console {
    tron: any
  }
}
console.tron = Reactotron
