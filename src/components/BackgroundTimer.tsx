import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform,
} from 'react-native'
import _BackgroundTimer from 'react-native-background-timer'

const EventEmitter = Platform.select({
  ios: () => NativeAppEventEmitter,
  android: () => DeviceEventEmitter,
})()

class BackgroundTimer {
  constructor(props) {
    // super(props)
    let backgroundListener
  }

  static setInterval(callback, delay) {
    _BackgroundTimer.start()
    this.backgroundListener = EventEmitter.addListener(
      'backgroundTimer',
      () => {
        this.backgroundTimer = _BackgroundTimer.setInterval(callback, delay)
      },
    )
    return this.backgroundListener
  }

  static clearInterval(timer) {
    console.log('BackgroundTimer, clearInterval timer', timer)
    if (timer) timer.remove()
    if (this.backgroundTimer)
      _BackgroundTimer.clearInterval(this.backgroundTimer)
    _BackgroundTimer.stop()
  }
}

export default BackgroundTimer
